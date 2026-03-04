export default function ConfigurationPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-4 text-xl font-bold text-slate-900">Configuration</h2>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-600">Manage system settings, integrations, and organizational configurations.</p>
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-semibold text-slate-900">System Settings</h3>
        <div className="space-y-3">
          {[
            { name: 'Organization Name', value: 'Acme Corporation' },
            { name: 'Region', value: 'North America' },
            { name: 'Data Retention', value: '90 days' },
            { name: 'Audit Logging', value: 'Enabled' },
          ].map((setting) => (
            <div key={setting.name} className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
              <div>
                <p className="text-sm font-medium text-slate-900">{setting.name}</p>
                <p className="text-xs text-slate-500">{setting.value}</p>
              </div>
              <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">Edit</button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-semibold text-slate-900">Integrations</h3>
        <div className="space-y-2">
          {['Active Directory', 'ServiceNow', 'Slack', 'GitHub'].map((integration) => (
            <div key={integration} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <p className="text-sm font-medium text-slate-900">{integration}</p>
              </div>
              <button className="text-xs font-semibold text-slate-400 hover:text-slate-600">Manage</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
