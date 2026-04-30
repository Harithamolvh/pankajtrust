import React from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Link, router } from '@inertiajs/react';

export default function DataTable({ 
    data, 
    columns, 
    pagination, 
    searchQuery = '', 
    onSearch,
    emptyState,
    actions
}) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-black/5 overflow-hidden flex flex-col">
            {/* Toolbar */}
            {(onSearch || actions) && (
                <div className="p-4 border-b border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-adminBg/30">
                    {onSearch && (
                        <div className="relative max-w-sm w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search size={16} className="text-charcoal/40" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-inputBorder rounded-md leading-5 bg-white placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron sm:text-sm transition-colors font-sans"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => onSearch(e.target.value)}
                            />
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        {actions}
                    </div>
                </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-black/5">
                    <thead className="bg-adminTh">
                        <tr>
                            {columns.map((col, idx) => (
                                <th 
                                    key={idx} 
                                    scope="col" 
                                    className={`px-6 py-3 text-left text-xs font-bold text-charcoal/60 uppercase tracking-wider font-sans ${col.className || ''}`}
                                >
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-black/5">
                        {(!data || data.length === 0) ? (
                            <tr>
                                <td colSpan={columns.length} className="px-6 py-12 text-center text-charcoal/50 font-sans">
                                    {emptyState || "No records found."}
                                </td>
                            </tr>
                        ) : (
                            data.map((row, rowIdx) => (
                                <tr key={row.id || rowIdx} className="hover:bg-adminBg/50 transition-colors">
                                    {columns.map((col, colIdx) => (
                                        <td key={colIdx} className={`px-6 py-4 whitespace-nowrap text-sm text-charcoal font-sans ${col.cellClassName || ''}`}>
                                            {col.cell(row)}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {pagination && pagination.last_page > 1 && (
                <div className="bg-adminBg/30 px-4 py-3 border-t border-black/5 flex items-center justify-between sm:px-6">
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-charcoal/60 font-sans">
                                Showing <span className="font-medium">{pagination.from || 0}</span> to <span className="font-medium">{pagination.to || 0}</span> of{' '}
                                <span className="font-medium">{pagination.total}</span> results
                            </p>
                        </div>
                        <div>
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                {pagination.links.map((link, idx) => {
                                    const isPrevious = idx === 0;
                                    const isNext = idx === pagination.links.length - 1;
                                    
                                    if (!link.url && (isPrevious || isNext)) {
                                        return (
                                            <span key={idx} className={`relative inline-flex items-center px-2 py-2 border border-inputBorder bg-gray-50 text-sm font-medium text-gray-400 ${isPrevious ? 'rounded-l-md' : ''} ${isNext ? 'rounded-r-md' : ''}`}>
                                                {isPrevious ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                                            </span>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={idx}
                                            href={link.url || '#'}
                                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors ${
                                                link.active 
                                                    ? 'z-10 bg-saffron text-white border-saffron' 
                                                    : 'bg-white border-inputBorder text-charcoal hover:bg-adminBg/50'
                                            } ${(isPrevious && !link.active) ? 'rounded-l-md px-2' : ''} ${(isNext && !link.active) ? 'rounded-r-md px-2' : ''}`}
                                        >
                                            {isPrevious ? (
                                                <ChevronLeft size={16} />
                                            ) : isNext ? (
                                                <ChevronRight size={16} />
                                            ) : (
                                                <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                            )}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
