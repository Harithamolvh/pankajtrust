import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import InputError from '@/Components/InputError';
import { Save } from 'lucide-react';

export default function SettingsIndex({ settings }) {
    // Flatten settings into a key-value object for the form
    const initialData = {};
    const settingsMap = {}; // To keep track of types for rendering

    Object.keys(settings).forEach(group => {
        settings[group].forEach(setting => {
            initialData[setting.key] = setting.value || '';
            settingsMap[setting.key] = setting;
        });
    });

    const { data, setData, post, processing, errors, isDirty } = useForm({
        settings_data: initialData
    });

    const handleSettingChange = (key, value) => {
        setData('settings_data', {
            ...data.settings_data,
            [key]: value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        
        // Transform back to array format expected by backend
        const payload = Object.keys(data.settings_data).map(key => ({
            key: key,
            value: data.settings_data[key]
        }));

        post(route('admin.settings.update'), {
            data: { settings: payload },
            preserveScroll: true,
        });
    };

    const renderField = (setting) => {
        const value = data.settings_data[setting.key];
        const error = errors[`settings.${Object.keys(settingsMap).indexOf(setting.key)}.value`];

        switch (setting.type) {
            case 'text':
                return (
                    <div key={setting.key}>
                        <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">{setting.label}</label>
                        <input 
                            type="text" 
                            value={value} 
                            onChange={e => handleSettingChange(setting.key, e.target.value)} 
                            className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" 
                        />
                        <InputError message={error} className="mt-1" />
                    </div>
                );
            case 'number':
                return (
                    <div key={setting.key}>
                        <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">{setting.label}</label>
                        <input 
                            type="number" 
                            value={value} 
                            onChange={e => handleSettingChange(setting.key, e.target.value)} 
                            className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" 
                        />
                        <InputError message={error} className="mt-1" />
                    </div>
                );
            case 'boolean':
                return (
                    <div key={setting.key}>
                        <label className="flex items-center gap-2 cursor-pointer mt-6">
                            <input 
                                type="checkbox" 
                                checked={value === '1' || value === 'true' || value === true} 
                                onChange={e => handleSettingChange(setting.key, e.target.checked ? '1' : '0')} 
                                className="rounded border-inputBorder text-saffron focus:ring-saffron bg-white" 
                            />
                            <span className="text-sm font-sans font-bold text-charcoal/80">{setting.label}</span>
                        </label>
                        <InputError message={error} className="mt-1" />
                    </div>
                );
            case 'html':
            case 'json':
                return (
                    <div key={setting.key}>
                        <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">{setting.label}</label>
                        <textarea 
                            rows="4" 
                            value={value} 
                            onChange={e => handleSettingChange(setting.key, e.target.value)} 
                            className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron resize-y font-mono text-xs"
                        ></textarea>
                        <InputError message={error} className="mt-1" />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <AdminLayout title="System Settings" breadcrumbs={[{ label: 'Dashboard', href: route('admin.dashboard') }, { label: 'Settings' }]}>
            <Head title="Settings | Admin Panel" />

            <div className="max-w-4xl mx-auto">
                <form onSubmit={submit} className="space-y-8 pb-12">
                    
                    {Object.keys(settings).length === 0 ? (
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-black/5 text-center">
                            <p className="text-charcoal/60 font-sans">No settings found in the database. Please run migrations and seeders.</p>
                        </div>
                    ) : (
                        <>
                            {Object.keys(settings).map((group) => (
                                <div key={group} className="bg-white p-6 rounded-lg shadow-sm border border-black/5">
                                    <h3 className="font-display font-bold text-lg text-charcoal mb-6 capitalize border-b border-black/5 pb-2">
                                        {group.replace('_', ' ')} Settings
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {settings[group].map(setting => renderField(setting))}
                                    </div>
                                </div>
                            ))}

                            <div className="sticky bottom-6 bg-adminBg/90 backdrop-blur-md p-4 rounded-lg border border-black/5 shadow-lg flex justify-between items-center z-10">
                                <div className="text-sm font-sans text-charcoal/60">
                                    {isDirty ? 'You have unsaved changes.' : 'All changes saved.'}
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={processing || !isDirty} 
                                    className="px-6 py-2.5 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm disabled:opacity-50 flex items-center gap-2"
                                >
                                    <Save size={16} />
                                    {processing ? 'Saving...' : 'Save All Settings'}
                                </button>
                            </div>
                        </>
                    )}

                </form>
            </div>
        </AdminLayout>
    );
}
