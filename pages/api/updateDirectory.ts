import { promises as fs } from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const directoryPath = path.resolve('D:/MyGitHub/epzinc/JSON/directoryStructure.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Get the updated structure from the request body
      const updatedStructure = req.body;

      // Write the updated structure to the JSON file
      await fs.writeFile(directoryPath, JSON.stringify(updatedStructure, null, 2));

      // Send a success response
      res.status(200).json({ message: 'Directory structure updated successfully' });
    } catch (error) {
      console.error('Error writing to JSON file:', error);
      res.status(500).json({ message: 'Failed to update directory structure' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
