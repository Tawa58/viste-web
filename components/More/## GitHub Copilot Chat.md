## GitHub Copilot Chat

- Extension Version: 0.28.5 (prod)
- VS Code: vscode/1.101.0
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.87.245.6 (76 ms)
- DNS ipv6 Lookup: Error (54 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (49 ms)
- Electron fetch (configured): HTTP 200 (318 ms)
- Node.js https: timed out after 10 seconds
- Node.js fetch: HTTP 200 (894 ms)
- Helix fetch: HTTP 200 (1022 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.114.21 (26 ms)
- DNS ipv6 Lookup: Error (148 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (24 ms)
- Electron fetch (configured): timed out after 10 seconds
- Node.js https: HTTP 200 (5396 ms)
- Node.js fetch: timed out after 10 seconds
- Helix fetch: HTTP 200 (3609 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).