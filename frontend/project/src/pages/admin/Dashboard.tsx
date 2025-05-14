import React from 'react';
import { FileText, Users, Activity } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Posts', value: 12, icon: FileText, color: 'bg-blue-500' },
    { label: 'Total Views', value: '2.4k', icon: Users, color: 'bg-green-500' },
    { label: 'Active Users', value: 142, icon: Activity, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-900 rounded-lg p-6 flex items-center"
          >
            <div className={`p-4 rounded-lg ${stat.color}`}>
              <stat.icon size={24} className="text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-400 text-sm">{stat.label}</h3>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Posts */}
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((post) => (
              <div key={post} className="flex items-center justify-between py-3 border-b border-gray-800">
                <div>
                  <h3 className="font-medium">Post Title {post}</h3>
                  <p className="text-sm text-gray-400">Published 2 days ago</p>
                </div>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                  Published
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((activity) => (
              <div key={activity} className="flex items-start gap-4 py-3 border-b border-gray-800">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="text-sm">New comment on <span className="text-blue-400">Post Title</span></p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}