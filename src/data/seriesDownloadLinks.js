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
  'iron-heart-s1': {
    title: 'Iron Heart Season 1',
    downloadLinks: {
      '4K': {
        'HubCloud': 'https://hubcloud.one/drive/30a9za9mz9vagyz'
      },
      '1080p 10Bit': {
        'HBLinks': 'https://hblinks.pro/archives/92725'
      },
      '720p': {
        'HBLinks': 'https://hblinks.pro/archives/92726'
      }
    }
  },
  'criminal-justice-family-matter': {
    title: 'Criminal Justice: A Family Matter',
    downloadLinks: {
      '4K E01': {
        'HubDrive': 'https://hubdrive.wales/file/2769891210'
      },
      '4K E02': {
        'HubDrive': 'https://hubdrive.wales/file/4755615120'
      },
      '4K E03': {
        'HubDrive': 'https://hubdrive.wales/file/2567102159'
      },
      '4K E04': {
        'HubDrive': 'https://hubdrive.wales/file/3781882851'
      },
      '4K E05': {
        'HubDrive': 'https://hubdrive.wales/file/2869702935'
      },
      '4K E06': {
        'HubDrive': 'https://hubdrive.wales/file/4316482105'
      },
      '4K E07': {
        'HubDrive': 'https://hubdrive.wales/file/1946363922'
      },
      '4K E08': {
        'HubDrive': 'https://hubdrive.wales/file/4543137715'
      }
    }
  },
  'college-romance-s4': {
    title: 'College Romance Season 4',
    downloadLinks: {
      '1080p Batch': {
        'HBLinks': 'https://hblinks.pro/archives/63688'
      },
      '720p': {
        'HBLinks': 'https://hblinks.pro/archives/63687'
      }
    }
  },
  'college-romance-s2': {
    title: 'College Romance Season 2',
    downloadLinks: {
      '1080p': {
        'HubDrive': 'https://hubdrive.wales/file/2554512500'
      },
      '720p': {
        'HBLinks': 'https://hblinks.pro/archives/27660',
        'direct': 'https://pixeldrain.dev/api/file/whzGVWWB?download'
      }
    }
  },
  'college-romance-s3': {
    title: 'College Romance Season 3',
    downloadLinks: {
      '720p': {
        'direct': 'https://storage.googleapis.com/photos-web-downloads-anonymous/20250506T071513.296Z/4133399871716478688/0422e215-f92c-47c6-a821-f7968dd7deae/1/4b9fd5aa-5d40-4a22-b00a-c2ea5cc60f66'
      },
      '480p': {
        'HubDrive': 'https://hubdrive.wales/file/1880487982'
      }
    }
  },
  'college-romance-s1': {
    title: 'College Romance Season 1',
    downloadLinks: {
      '720p WEB-RIP': {
        'FilePress': 'https://new5.filepress.live/file/66a3c7bdd1cecf57eb3fc4e6'
      }
    }
  },
}; 