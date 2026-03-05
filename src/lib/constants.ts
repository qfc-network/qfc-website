export const SITE = {
  name: 'QFC Network',
  tagline: 'The Future of Decentralized Computing',
  subtitle: 'A next-generation blockchain platform with Proof of Contribution consensus, multi-VM architecture, and quantum-safe cryptography — built for speed, security, and true decentralization.',
  url: 'https://qfc.network',
  docsUrl: 'https://docs.qfc.network',
  github: 'https://github.com/qfc-network',
  discord: 'https://discord.gg/qfc',
  twitter: 'https://x.com/QFCNetwork',
  explorer: 'https://explorer.testnet.qfc.network',
  faucet: 'https://faucet.testnet.qfc.network',
};

export const STATS = [
  { value: '500,000+', label: 'Transactions Per Second' },
  { value: '<0.3s', label: 'Finality' },
  { value: '<$0.0001', label: 'Average Gas Fee' },
];

export const FEATURES = [
  {
    title: 'Proof of Contribution',
    description: 'Multi-dimensional consensus scoring — staking, computation, uptime, validation accuracy, network quality, storage, and reputation.',
    icon: 'contribution',
  },
  {
    title: 'Multi-VM Architecture',
    description: 'Run smart contracts on QVM, EVM, WASM, or AI-VM. Choose the best execution environment for your use case.',
    icon: 'vm',
  },
  {
    title: 'Quantum-Safe Cryptography',
    description: 'Post-quantum cryptographic primitives protect the network against future quantum computing threats.',
    icon: 'quantum',
  },
  {
    title: 'Ultra-Low Fees',
    description: 'Transaction costs below $0.0001 make microtransactions and high-frequency DeFi operations viable.',
    icon: 'fees',
  },
  {
    title: 'EVM Compatible',
    description: 'Deploy existing Solidity contracts with zero modifications. Full compatibility with Ethereum tooling and wallets.',
    icon: 'evm',
  },
  {
    title: 'Rust Core Engine',
    description: 'Built from the ground up in Rust for maximum performance, memory safety, and reliability.',
    icon: 'rust',
  },
];

export const ARCHITECTURE_LAYERS = [
  { name: 'Execution Layer', description: 'QVM / EVM / WASM / AI-VM', color: '#4fc3f7' },
  { name: 'State Layer', description: 'Merkle Patricia Trie + State Channels', color: '#29b6f6' },
  { name: 'Consensus Layer', description: 'Proof of Contribution (PoC)', color: '#0288d1' },
  { name: 'Storage Layer', description: 'Distributed Storage + IPFS', color: '#01579b' },
];

export const ECOSYSTEM = [
  { name: 'QFC Wallet', description: 'Browser extension wallet', repo: 'qfc-wallet', icon: 'wallet' },
  { name: 'Block Explorer', description: 'Real-time blockchain explorer', repo: 'qfc-explorer', icon: 'explorer' },
  { name: 'JavaScript SDK', description: 'TypeScript SDK for DApp development', repo: 'qfc-sdk-js', icon: 'js' },
  { name: 'Python SDK', description: 'Python SDK for backend integration', repo: 'qfc-sdk-python', icon: 'python' },
  { name: 'CLI Tools', description: 'Command-line interface', repo: 'qfc-cli', icon: 'cli' },
  { name: 'Smart Contracts', description: 'Solidity contract library', repo: 'qfc-contracts', icon: 'contracts' },
  { name: 'Testnet Faucet', description: 'Get testnet QFC tokens', repo: 'qfc-faucet', icon: 'faucet' },
  { name: 'Documentation', description: 'Developer docs and guides', repo: 'qfc-docs', icon: 'docs' },
  { name: 'Mobile Wallet', description: 'iOS & Android wallet', repo: 'qfc-wallet-mobile', icon: 'mobile' },
];

export const CODE_SNIPPET = `import { QFCProvider, QFCWallet } from '@qfc/sdk';

// Connect to QFC Network
const provider = new QFCProvider('https://rpc.qfc.network');

// Create wallet from mnemonic
const wallet = QFCWallet.fromMnemonic(
  'your twelve word mnemonic phrase here ...'
);

// Check balance
const balance = await provider.getBalance(wallet.address);
console.log(\`Balance: \${balance.formatted} QFC\`);

// Send a transaction
const tx = await wallet.sendTransaction({
  to: '0x1234...5678',
  value: QFCProvider.parseQFC('10.0'),
});

console.log(\`TX Hash: \${tx.hash}\`);`;

export const NAV_LINKS = [
  { label: 'Docs', href: 'https://docs.qfc.network' },
  { label: 'GitHub', href: 'https://github.com/qfc-network' },
  { label: 'Explorer', href: 'https://explorer.testnet.qfc.network' },
];
