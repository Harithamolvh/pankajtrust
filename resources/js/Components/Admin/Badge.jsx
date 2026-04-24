import React from 'react';

export default function Badge({ status, children }) {
    const statusStr = (status || '').toLowerCase();
    
    let baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize font-sans ";
    
    switch (statusStr) {
        case 'active':
        case 'published':
            baseClasses += "bg-[#DCFCE7] text-[#166534]";
            break;
        case 'completed':
            baseClasses += "bg-[#FEF9C3] text-[#854D0E]";
            break;
        case 'draft':
            baseClasses += "bg-[#F3F4F6] text-[#374151]";
            break;
        case 'scheduled':
        case 'pending':
            baseClasses += "bg-[#FEF3C7] text-[#92400E]";
            break;
        case 'withdrawn':
            baseClasses += "bg-red-100 text-red-800";
            break;
        default:
            baseClasses += "bg-gray-100 text-gray-800";
            break;
    }

    return (
        <span className={baseClasses}>
            {children || statusStr}
        </span>
    );
}
