// PositionControl.tsx
import React, { useState } from 'react';
import PositionWrapper from './PositionWrapper';

const PositionControl = () => {
  const [display, setDisplay] = useState<'flex' | 'grid' | 'block'>('block');
  const [justifyContent, setJustifyContent] = useState<'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'>('start');
  const [alignItems, setAlignItems] = useState<'start' | 'center' | 'end' | 'baseline' | 'stretch'>('start');
  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>('row');
  const [gridCols, setGridCols] = useState(1);
  const [gridRows, setGridRows] = useState(1);
  const [gap, setGap] = useState(0);
  const [position, setPosition] = useState<'relative' | 'absolute' | 'fixed' | 'sticky'>('relative');
  const [top, setTop] = useState<number | undefined>();
  const [left, setLeft] = useState<number | undefined>();

  return (
    <div className="flex flex-col space-y-6 p-4 bg-gray-50 min-h-screen">
      {/* Control UI */}
      <div className="p-4 bg-gray-800 text-white rounded-lg space-y-4 shadow-md">
        <h2 className="text-lg font-semibold text-white">Position Settings</h2>

        {/* Display Type */}
        <div>
          <label className="block mb-1 text-gray-200">Display Type</label>
          <select
            value={display}
            onChange={(e) => setDisplay(e.target.value as 'flex' | 'grid' | 'block')}
            className="p-2 border border-gray-500 rounded bg-gray-700 text-white"
          >
            <option value="block">Block</option>
            <option value="flex">Flex</option>
            <option value="grid">Grid</option>
          </select>
        </div>

        {/* Justify Content */}
        {display === 'flex' && (
          <>
            <div>
              <label className="block mb-1 text-gray-200">Justify Content</label>
              <select
                value={justifyContent}
                onChange={(e) => setJustifyContent(e.target.value as any)}
                className="p-2 border border-gray-500 rounded bg-gray-700 text-white"
              >
                <option value="start">Start</option>
                <option value="center">Center</option>
                <option value="end">End</option>
                <option value="between">Between</option>
                <option value="around">Around</option>
                <option value="evenly">Evenly</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-gray-200">Align Items</label>
              <select
                value={alignItems}
                onChange={(e) => setAlignItems(e.target.value as any)}
                className="p-2 border border-gray-500 rounded bg-gray-700 text-white"
              >
                <option value="start">Start</option>
                <option value="center">Center</option>
                <option value="end">End</option>
                <option value="baseline">Baseline</option>
                <option value="stretch">Stretch</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-gray-200">Flex Direction</label>
              <select
                value={flexDirection}
                onChange={(e) => setFlexDirection(e.target.value as any)}
                className="p-2 border border-gray-500 rounded bg-gray-700 text-white"
              >
                <option value="row">Row</option>
                <option value="column">Column</option>
              </select>
            </div>
          </>
        )}

        {/* Grid Columns */}
        {display === 'grid' && (
          <>
            <div>
              <label className="block mb-1 text-gray-200">Grid Columns</label>
              <input
                type="number"
                value={gridCols}
                onChange={(e) => setGridCols(Number(e.target.value))}
                className="p-2 border border-gray-500 rounded bg-gray-700 text-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-200">Grid Rows</label>
              <input
                type="number"
                value={gridRows}
                onChange={(e) => setGridRows(Number(e.target.value))}
                className="p-2 border border-gray-500 rounded bg-gray-700 text-white"
              />
            </div>
          </>
        )}

        {/* Gap */}
        <div>
          <label className="block mb-1 text-gray-200">Gap</label>
          <input
            type="number"
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
            className="p-2 border border-gray-500 rounded bg-gray-700 text-white"
          />
        </div>

        {/* Position */}
        <div>
          <label className="block mb-1 text-gray-200">Position</label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value as any)}
            className="p-2 border border-gray-500 rounded bg-gray-700 text-white"
          >
            <option value="relative">Relative</option>
            <option value="absolute">Absolute</option>
            <option value="fixed">Fixed</option>
            <option value="sticky">Sticky</option>
          </select>
        </div>

        {/* Position Offsets */}
        <div className="flex space-x-4">
          <div>
            <label className="block mb-1 text-gray-200">Top</label>
            <input
              type="number"
              value={top}
              onChange={(e) => setTop(Number(e.target.value))}
              className="p-2 border border-gray-500 rounded bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-200">Left</label>
            <input
              type="number"
              value={left}
              onChange={(e) => setLeft(Number(e.target.value))}
              className="p-2 border border-gray-500 rounded bg-gray-700 text-white"
            />
          </div>
        </div>
      </div>

      {/* Position Wrapper */}
      <PositionWrapper
        display={display}
        justifyContent={justifyContent}
        alignItems={alignItems}
        flexDirection={flexDirection}
        gridCols={gridCols}
        gridRows={gridRows}
        gap={gap}
        position={position}
        top={top}
        left={left}
      >
        <div className="bg-blue-600 text-white p-4 rounded">Item 1</div>
        <div className="bg-green-600 text-white p-4 rounded">Item 2</div>
        <div className="bg-red-600 text-white p-4 rounded">Item 3</div>
      </PositionWrapper>
    </div>
  );
};

export default PositionControl;