import { useState } from 'react';

export interface DirectoryItem {
  name: string;
  type: 'file' | 'folder';
  children?: DirectoryItem[];
}

interface DirectoryProps {
  directoryStructure: DirectoryItem[];
  onFileClick: (fileName: string) => void;
  setDirectoryStructure: (newStructure: DirectoryItem[]) => void;
}

const Directory = ({ directoryStructure, onFileClick, setDirectoryStructure }: DirectoryProps) => {
  const [selectedFolder, setSelectedFolder] = useState<DirectoryItem | null>(null);

  const updateDirectoryOnServer = async (updatedStructure: DirectoryItem[]) => {
    try {
      const response = await fetch('/api/updateDirectory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedStructure),
      });

      if (!response.ok) {
        throw new Error('Failed to update directory structure on server');
      }
    } catch (error) {
      console.error('Error updating directory:', error);
    }
  };

  const addNewItem = (type: 'file' | 'folder') => {
    const itemName = prompt(`Enter ${type} name:`);
    if (!itemName) return;

    const newItem: DirectoryItem = {
      name: itemName,
      type,
      children: type === 'folder' ? [] : undefined,
    };

    const updatedStructure = [...directoryStructure];

    if (selectedFolder) {
      const addItemToFolder = (folder: DirectoryItem): DirectoryItem => {
        if (folder.name === selectedFolder.name && folder.type === 'folder') {
          folder.children = [...(folder.children || []), newItem];
        } else if (folder.children) {
          folder.children = folder.children.map((child) => addItemToFolder(child));
        }
        return folder;
      };
      setDirectoryStructure(updatedStructure.map((item) => addItemToFolder(item)));
    } else {
      // Add to root if no folder selected
      updatedStructure.push(newItem);
      setDirectoryStructure(updatedStructure);
    }

    // Call the API to update the file on the server
    updateDirectoryOnServer(updatedStructure);
  };

  const deleteItem = (itemName: string) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${itemName}"?`);
    if (!confirmDelete) return;

    const deleteFromStructure = (items: DirectoryItem[]): DirectoryItem[] => {
      return items.filter((item) => {
        if (item.name === itemName) return false;
        if (item.children) {
          item.children = deleteFromStructure(item.children);
        }
        return true;
      });
    };

    const updatedStructure = deleteFromStructure(directoryStructure);
    setDirectoryStructure(updatedStructure);

    // Call the API to update the file on the server
    updateDirectoryOnServer(updatedStructure);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-4">
        <button onClick={() => addNewItem('folder')} title="Add Folder">
          <span className="text-2xl">📁+</span>
        </button>
        <button onClick={() => addNewItem('file')} title="Add File">
          <span className="text-2xl">📄+</span>
        </button>
      </div>
      {directoryStructure.map((item, index) => (
        <DirectoryNode
          key={index}
          item={item}
          onFileClick={onFileClick}
          setSelectedFolder={setSelectedFolder}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

const DirectoryNode = ({
  item,
  onFileClick,
  setSelectedFolder,
  deleteItem,
}: {
  item: DirectoryItem;
  onFileClick: (fileName: string) => void;
  setSelectedFolder: (folder: DirectoryItem | null) => void;
  deleteItem: (itemName: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleFolder = () => {
    if (item.type === 'folder') {
      setIsOpen(!isOpen);
      setSelectedFolder(item); // Select folder when toggling
    }
  };

  const handleFileClick = () => {
    if (item.type === 'file') {
      onFileClick(item.name);
    }
  };

  return (
    <div
      className="pl-4 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex items-center space-x-2 cursor-pointer ${
          item.type === 'folder' ? 'hover:text-blue-500' : ''
        }`}
        onClick={item.type === 'folder' ? toggleFolder : handleFileClick}
      >
        {item.type === 'folder' ? (
          <span>{isOpen ? '📂' : '📁'}</span>
        ) : (
          <span>📄</span>
        )}
        <span>{item.name}</span>
      </div>

      {/* Show delete icon (bin) on hover */}
      {isHovered && (
        <button
          onClick={() => deleteItem(item.name)}
          className="absolute right-0 text-red-600 hover:text-red-800"
          title="Delete"
        >
          🗑️
        </button>
      )}

      {isOpen && item.children && (
        <div className="pl-4">
          <Directory
            directoryStructure={item.children}
            onFileClick={onFileClick}
            setDirectoryStructure={(newChildren) => {
              item.children = newChildren;
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Directory;