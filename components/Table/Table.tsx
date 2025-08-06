"use client";
import React from "react";

interface TableColumn {
  header: string;
  key: string;
  width?: string;
}

interface TableRow {
  [key: string]: string | number;
}

interface TableProps {
  title?: string;
  icon?: string;
  columns: TableColumn[];
  rows: TableRow[];
  variant?: 'default' | 'striped' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
}

function Table({
  title,
  icon,
  columns,
  rows,
  variant = 'default',
  size = 'md'
}: TableProps) {

  const getTableClasses = () => {
    let classes = 'table w-full';
    
    if (variant === 'striped') classes += ' table-zebra';
    if (variant === 'bordered') classes += ' table-bordered';
    
    if (size === 'sm') classes += ' table-sm';
    if (size === 'lg') classes += ' table-lg';
    
    return classes;
  };

  const DefaultIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="size-5" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
      />
    </svg>
  );

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4">
        {/* Table Title */}
        {title && (
          <div className="flex items-center gap-3 mb-6">
            {icon ? (
              <div dangerouslySetInnerHTML={{ __html: icon }} />
            ) : (
              <DefaultIcon />
            )}
            <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
          </div>
        )}

        {/* Table Container */}
        <div className="card bg-base-100 shadow-xl border border-base-300/20">
          <div className="card-body p-0">
            <div className="overflow-x-auto">
              <table className={getTableClasses()}>
                <thead>
                  <tr className="border-b border-base-300">
                    {columns.map((column, index) => (
                      <th 
                        key={index}
                        className="text-left font-semibold py-4 px-6 bg-base-200/50"
                        style={column.width ? { width: column.width } : undefined}
                      >
                        {column.header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-base-100/50 border-b border-base-300/30 last:border-b-0">
                      {columns.map((column, colIndex) => (
                        <td key={colIndex} className="py-4 px-6 align-top">
                          {row[column.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
