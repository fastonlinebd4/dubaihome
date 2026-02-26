'use client';

import { useState, useEffect } from 'react';
import { 
    Shield, LogOut, Trash2, Calendar, 
    Phone, Mail, User, MapPin, MessageSquare, Globe 
} from 'lucide-react';

export default function AdminDashboard() {
    const [leads, setLeads] = useState<any[]>([]);
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    // ১. ডাটাবেজ থেকে লিড নিয়ে আসার ফাংশন
    const fetchLeads = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/leads?password=${encodeURIComponent(password)}`);
            if (res.ok) {
                const data = await res.json();
                setLeads(data);
                setIsLoggedIn(true);
            } else {
                alert('Invalid password or unauthorized');
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // ২. লিড ডিলিট করার ফাংশন
    const deleteLead = async (id: string) => {
        if (!confirm('Are you sure you want to delete this lead?')) return;

        try {
            const res = await fetch(`/api/admin/leads?id=${id}&password=${encodeURIComponent(password)}`, { 
                method: 'DELETE' 
            });
            if (res.ok) {
                setLeads(leads.filter(l => l.id !== id));
            }
        } catch (err) {
            console.error(err);
        }
    };

    // --- লগইন স্ক্রিন (Login Screen) ---
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10 shadow-2xl">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                            <Shield className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-white text-center mb-2 font-heading">Admin Access</h1>
                    <p className="text-gray-500 text-[10px] text-center mb-8 uppercase tracking-[0.2em] font-black">Secure Lead Management</p>

                    <form onSubmit={(e) => { e.preventDefault(); fetchLeads(); }} className="space-y-4">
                        <input
                            type="password"
                            placeholder="Enter Admin Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-sm font-bold text-white focus:outline-none focus:border-primary/50 transition-all text-center"
                        />
                        <button 
                            disabled={loading}
                            className="w-full h-12 bg-primary hover:bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50"
                        >
                            {loading ? 'Verifying...' : 'Login To Dashboard'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // --- ড্যাশবোর্ড স্ক্রিন (Main Dashboard) ---
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-black text-gray-900 font-heading">Lead Dashboard</h1>
                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Customer Inquiries Management</p>
                    </div>
                    <button
                        onClick={() => { setIsLoggedIn(false); setPassword(''); }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg"
                    >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Logout</span>
                    </button>
                </div>

                {/* Leads List */}
                <div className="grid gap-6">
                    {leads.length === 0 ? (
                        <div className="text-center py-24 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-6 h-6 text-gray-300" />
                            </div>
                            <p className="text-gray-400 font-bold text-sm">No inquiries found in the database.</p>
                        </div>
                    ) : (
                        leads.map((lead) => (
                            <div key={lead.id} className="bg-white p-6 md:p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                                {/* Decorative Glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

                                <div className="grid md:grid-cols-4 gap-8 items-start relative z-10">
                                    {/* Customer Name */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Customer</p>
                                            <h3 className="font-bold text-gray-900 text-base leading-none">{lead.name}</h3>
                                        </div>
                                    </div>

                                    {/* Contact & Email (UPDATED SECTION) */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Contact Details</p>
                                            <h3 className="font-bold text-gray-900 text-sm leading-none mb-1.5">{lead.phone}</h3>
                                            <p className="text-[11px] font-medium text-blue-600 truncate max-w-full italic">
                                                {lead.email || 'No Email Provided'}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Service */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 shrink-0">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Service</p>
                                            <h3 className="font-bold text-gray-900 text-sm leading-tight">{lead.service}</h3>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center justify-between md:justify-end gap-6 h-full">
                                        <div className="text-right">
                                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Received On</p>
                                            <p className="text-xs font-bold text-gray-600 italic">
                                                {new Date(lead.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => deleteLead(lead.id)}
                                            className="w-12 h-12 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all border border-transparent hover:border-red-100 shadow-sm"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Address Section */}
                                {lead.address && (
                                    <div className="mt-8 pt-6 border-t border-gray-50 flex items-start gap-4">
                                        <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shadow-sm shrink-0 border border-green-100/50">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 bg-green-50/30 p-4 rounded-3xl border border-green-100/20">
                                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Service Location / Address</p>
                                            <p className="text-sm font-bold text-gray-700 leading-relaxed">{lead.address}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Message Section */}
                                {lead.message && (
                                    <div className="mt-4 flex items-start gap-4">
                                        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-primary shadow-sm shrink-0 border border-gray-100">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 bg-gray-50/50 p-4 rounded-3xl border border-gray-100/50">
                                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Special Instructions</p>
                                            <p className="text-sm font-medium text-gray-600 leading-relaxed italic">"{lead.message}"</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
            
            <footer className="mt-12 mb-8 text-center">
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em]">&copy; 2026 Admin Management System</p>
            </footer>
        </div>
    );
}
