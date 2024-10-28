import React, { useState, useEffect, useRef } from 'react';
import {
  MdDesktopMac,
  MdTablet,
  MdPhoneIphone,
  MdDarkMode,
  MdLightMode,
} from 'react-icons/md';
import { directoryStructure } from '@/JSON/directoryStructure';

interface DirectoryNode {
  name: string;
  type: 'folder' | 'file';
  children?: DirectoryNode[];
}

const TestPage = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>(
    'desktop'
  );
  const [outerDarkMode, setOuterDarkMode] = useState(false);
  const [innerDarkMode, setInnerDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Toggle folder expansion
  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prevExpandedFolders) =>
      prevExpandedFolders.includes(folderName)
        ? prevExpandedFolders.filter((name) => name !== folderName)
        : [...prevExpandedFolders, folderName]
    );
  };

  // Check if folder is expanded
  const isFolderExpanded = (folderName: string) =>
    expandedFolders.includes(folderName);

  // Set the iframe's size based on view mode
  const getViewModeSize = () => {
    switch (viewMode) {
      case 'desktop':
        return { width: '1200px', height: '100%' };
      case 'tablet':
        return { width: '950px', height: '100%' };
      case 'mobile':
        return { width: '375px', height: '100%' };
      default:
        return { width: '100%', height: '100%' };
    }
  };

  // Dynamically return the iframe src based on the selected file
  const getIframeSrc = () => {
    return selectedFile ? `/render/${selectedFile}` : undefined;
  };

  // Function to filter the directory based on search query
  const filterDirectory = (
    nodes: DirectoryNode[],
    query: string
  ): DirectoryNode[] => {
    return nodes.reduce((filtered: DirectoryNode[], node) => {
      if (node.type === 'folder') {
        const filteredChildren = filterDirectory(node.children || [], query);
        if (
          filteredChildren.length > 0 ||
          node.name.toLowerCase().includes(query.toLowerCase())
        ) {
          filtered.push({
            ...node,
            children: filteredChildren,
          });
        }
      } else if (node.name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(node);
      }
      return filtered;
    }, []);
  };

  // Get the filtered directory based on search query
  const filteredDirectory = filterDirectory(
    directoryStructure as DirectoryNode[],
    searchQuery
  );

  // Recursive function to render the directory structure
  const renderDirectory = (nodes: DirectoryNode[]) => {
    return (
      <ul className="pl-4">
        {nodes.map((node) => (
          <li key={node.name} className="mb-2">
            {node.type === 'folder' ? (
              <>
                <button
                  className="flex items-center"
                  onClick={() => toggleFolder(node.name)}
                >
                  {isFolderExpanded(node.name) ? '➖' : '➕'}{' '}
                  {isFolderExpanded(node.name) ? '📂' : '📁'}{' '}
                  <span className="ml-2">{node.name}</span>
                </button>
                {isFolderExpanded(node.name) &&
                  renderDirectory(node.children || [])}
              </>
            ) : (
              <button
                className="flex items-center text-blue-500 hover:underline"
                onClick={() => setSelectedFile(node.name)}
              >
                📄 <span className="ml-2">{node.name}</span>
              </button>
            )}
          </li>
        ))}
      </ul>
    );
  };

  // Toggle the dark mode for outer page
  const toggleOuterDarkMode = () => {
    setOuterDarkMode((prevMode) => !prevMode);
  };

  // Toggle the dark mode for iframe (inner dark mode)
  const toggleInnerDarkMode = () => {
    setInnerDarkMode((prevMode) => !prevMode);
  };

  // Apply dark or light mode class on the body tag
  useEffect(() => {
    if (outerDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    // Send the inner dark mode status to the iframe
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ innerDarkMode }, '*');
    }
  }, [outerDarkMode, innerDarkMode]);

  // Handle messages from the iframe (for initial synchronization)
  useEffect(() => {
    const handleIframeMessage = (event: MessageEvent) => {
      if (event.data && event.data.requestInnerDarkMode) {
        // Send the current innerDarkMode to the iframe
        if (iframeRef.current && iframeRef.current.contentWindow) {
          iframeRef.current.contentWindow.postMessage({ innerDarkMode }, '*');
        }
      }
    };

    window.addEventListener('message', handleIframeMessage);

    return () => {
      window.removeEventListener('message', handleIframeMessage);
    };
  }, [innerDarkMode]);

  return (
    <div
      className={`flex h-screen ${outerDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
    >
      {/* Left Side: Directory */}
      <div className="w-1/6 border-r-2 p-4 overflow-y-auto">
        <h2 className="text-lg font-bold">Directory</h2>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search components or folders..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        {renderDirectory(filteredDirectory)}
      </div>

      {/* Right Side: Rendered Component */}
      <div className="flex flex-col w-3/4 p-4">
        {/* Icons for desktop, tablet, and mobile */}
        <div className="flex justify-between mb-4">
          {/* Outer Dark Mode Toggle */}
          <div>
            <label className="flex items-center space-x-2">
              <span>Outer Dark Mode</span>
              <input
                type="checkbox"
                className="toggle-checkbox"
                checked={outerDarkMode}
                onChange={toggleOuterDarkMode}
              />
            </label>
          </div>

          {/* View Mode Icons */}
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('desktop')}
              className={`p-2 rounded-full ${viewMode === 'desktop'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600'
                }`}
              title="Desktop View"
            >
              <MdDesktopMac size={24} />
            </button>
            <button
              onClick={() => setViewMode('tablet')}
              className={`p-2 rounded-full ${viewMode === 'tablet'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600'
                }`}
              title="Tablet View"
            >
              <MdTablet size={24} />
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`p-2 rounded-full ${viewMode === 'mobile'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600'
                }`}
              title="Mobile View"
            >
              <MdPhoneIphone size={24} />
            </button>
          </div>
        </div>

        <h1 className="font-extrabold flex justify-center mb-2">
          View Components
        </h1>

        {/* Inner Dark Mode Toggle */}
        <div className="flex justify-center mb-4">
          <button
            onClick={toggleInnerDarkMode}
            className={`flex items-center space-x-2 p-2 rounded-lg shadow-md transition-colors ${outerDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
              }`}          >
            {innerDarkMode ? (
              <MdDarkMode size={24} />
            ) : (
              <MdLightMode size={24} />
            )}
            <span>
              {innerDarkMode ? 'Inner Dark Mode' : 'Inner Light Mode'}
            </span>
          </button>
        </div>

        {/* Iframe that dynamically resizes based on the selected view mode */}
        {getIframeSrc() ? (
          <iframe
            ref={iframeRef}
            src={getIframeSrc()}
            className="border rounded-lg overflow-hidden transition-all duration-300 mx-auto"
            style={getViewModeSize()}
            title="Component View"
          ></iframe>
        ) : (
          <div>Select a file to view the component</div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
