// HOW TO ADD NEW QUALITIES (like 4K, HDR, etc.) FOR SERIES:
// 1. Add the quality to downloadLinks object: '4K': 'your-link-here'
// 2. Add button style in LinkProtector.jsx getButtonStyle function if needed
// 3. Add CSS style in LinkProtector.css if needed
//
// Example for adding 8K quality:
// 1. In downloadLinks: '8K': 'your-8k-link'
// 2. In getButtonStyle: case '8K': return 'blue';
// 3. In CSS: .lp-download.blue { background: #2196f3; }

export const seriesDownloadLinks = {
  // Add series download links here in the following format:
  // 'series-key': {
  //   title: 'Series Title',
  //   downloadLinks: {
  //     '1080p': {
  //       'HubDrive': 'your-link-here'
  //     },
  //     '720p': {
  //       'HBLinks': 'your-link-here'
  //     }
  //   }
  // }
  'peaky-blinders-s6': {
    title: 'Peaky Blinders Season 6',
    downloadLinks: {
      '1080p HQ': {
        'HubDrive': 'https://hubdrive.wales/file/15167963101'
      },
      '1080p 10bit': {
        'HBLinks': 'https://hblinks.pro/archives/92704'
      }
    }
  },
}; 