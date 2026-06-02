import { ChevronUp, ChevronDown, Share2, Bookmark, MoreVertical, X } from 'lucide-react';

export default function Home() {
  const files = [
    {
      id: 1,
      name: 'cgi-bin',
      type: 'folder',
      modified: '2026'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Browser Header */}
      <header className="bg-gray-800 text-white px-4 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between gap-2 text-xs mb-2">
          <span>9:36 AM</span>
          <div className="flex gap-1">
            <div className="w-4 h-3 border border-white rounded" />
            <span>78</span>
          </div>
        </div>
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <X size={24} />
            <ChevronDown size={24} />
          </div>
          
          <div className="flex-1 text-center">
            <div className="text-sm font-medium">Index of /</div>
            <div className="text-xs text-gray-400">asset.com</div>
          </div>
          
          <div className="flex items-center gap-4">
            <Share2 size={20} />
            <Bookmark size={20} />
            <MoreVertical size={20} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6">
        {/* Content Container with Black Background */}
        <div className="bg-black rounded-lg p-6">
          {/* Page Title */}
          <h1 className="text-gray-600 text-3xl font-light mb-8">Index of /</h1>

          {/* File Table */}
          <div className="bg-white rounded">
            {/* Table Header */}
            <div className="flex items-center border-b border-gray-200 px-6 py-4">
              <div className="flex-1 flex items-center gap-2">
                <span className="text-blue-600 font-medium">Name</span>
                <ChevronUp size={16} className="text-blue-600" />
              </div>
              <div className="w-24 text-right">
                <span className="text-blue-600 font-medium">Last</span>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {files.map((file) => (
                <div key={file.id} className="flex items-center px-6 py-4 hover:bg-gray-50">
                  <div className="flex-1 flex items-center gap-3">
                    {file.type === 'folder' ? (
                      <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center">
                        <span className="text-white text-xs">📁</span>
                      </div>
                    ) : (
                      <span>📄</span>
                    )}
                    <span className="text-blue-600 font-medium">{file.name}</span>
                  </div>
                  <div className="w-24 text-right text-gray-700">
                    {file.modified}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-gray-500 text-sm text-center">
            <p>Proudly Served by LiteSpeed Web Server at</p>
            <p>qfsworldweb3asset.com Port 443 [DEPLOYMENT-TEST-001]</p>
          </div>
        </div>
      </main>
    </div>
  );
}
