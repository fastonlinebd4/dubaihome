'use client';

import { useState } from 'react';
import { Shield, LogOut, Trash2, Phone, Mail, User } from 'lucide-react';

export default function AdminPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/leads?password=${encodeURIComponent(password)}`, {
        cache: 'no-store',
      });

      if (res.ok) {
        const data = await res.json();
        setLeads(data);
        setIsLoggedIn(true);
      } else {
        const err = await res.json().catch(() => ({}));
        alert(err?.error || 'Invalid password or unauthorized');
      }
    } catch (err) {
      console.error(err);
      alert('Network error');
    } finally {
      setLoading(false);
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;

    try {
      const res = await fetch(
        `/api/admin/leads?id=${encodeURIComponent(id)}&password=${encodeURIComponent(password)}`,
        { method: 'DELETE' }
      );

      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
      } else {
        const err = await res.json().catch(() => ({}));
        alert(err?.error || 'Delete failed');
      }
    } catch (err) {
      console.error(err);
      alert('Network error');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white text-center mb-2 font-heading">
            Admin Access
          </h1>
          <p className="text-gray-500 text-xs text-center mb-8 uppercase tracking-widest font-bold">
            Secure Lead Management
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchLeads();
            }}
            className="space-y-4"
          >
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-sm font-bold text-white focus:outline-none focus:border-primary/50 transition-all text-center"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-primary hover:bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-60"
            >
              {loading ? 'Loading...' : 'Login To Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-gray-900 font-heading">Lead Dashboard</h1>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              Management Panel
            </p>
          </div>

          <button
            onClick={() => setIsLoggedIn(false)}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-full font-bold text-xs hover:bg-red-500 transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>

        <div className="grid gap-6">
          {leads.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[32px] border border-gray-100 shadow-sm">
              <p className="text-gray-400 font-bold">No leads found yet.</p>
            </div>
          ) : (
            leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white p-6 md:p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

                <div className="grid md:grid-cols-4 gap-6 items-start relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                          Customer
                        </p>
                        <h3 className="font-bold text-gray-900 leading-none">{lead.name}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                          Contact
                        </p>
                        <h3 className="font-bold text-gray-900 leading-none">{lead.phone}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                          Service
                        </p>
                        <h3 className="font-bold text-gray-900 leading-none">{lead.service}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 h-full">
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Received
                      </p>
                      <p className="text-xs font-bold text-gray-600">
                        {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : ''}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="w-12 h-12 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all border border-transparent hover:border-red-100"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {lead.message && (
                  <div className="mt-6 pt-6 border-t border-gray-50">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Mail className="w-3 h-3" />
                      Message
                    </p>
                    <p className="text-sm font-medium text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-2xl">
                      {lead.message}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}