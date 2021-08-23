module.exports = {
  apps: [
    {
      name: 'satania-bot',
      script: 'dist/index.js',
      instances: 1,
      autorestart: true,
      restart_delay: 1000,
      max_memory_restart: '10G',
      node_args: '--max_old_space_size=4096',
      error_file: './data/logs/pm2/err.log',
      out_file: './data/logs/pm2/out.log',
      log_file: './data/logs/pm2/combined.log',
      time: false
    }
  ]
}
