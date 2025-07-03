// HOW TO ADD NEW QUALITIES (like 4K, HDR, etc.):
// 1. Add the quality to downloadLinks object: '4K': 'your-link-here'
// 2. Add button style in LinkProtector.jsx getButtonStyle function
// 3. Add CSS style in LinkProtector.css: .lp-download.purple { background: #9c27b0; }
// 
// Example for adding 8K quality:
// 1. In downloadLinks: '8K': 'your-8k-link'
// 2. In getButtonStyle: case '8K': return 'blue';
// 3. In CSS: .lp-download.blue { background: #2196f3; }

export const downloadLinks = {
  // Movies
  'kannapa': {
    title: 'Kannapa',
    fileSizes: ['500MB', '1.32GB', '3.2GB'],
    downloadLinks: {
      '480p': {
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNVjRocWVBSGxic2NrTDJzMVFDZEkwcjc1Rk4tLUlFVXNtVnRnN2txQmVfeEdFWlkzMEozNEFtQWpmMlgzQTdnP2tleT1VV0ZHUldnMU9WTTVlVzlCU2xFMVlrWnVOQzE1VkdKcWFFUnpWM2xS&token=MjkwNjI1',
        'HubCloud': 'https://hubcloud.ink/drive/dt18rd00soq1gdz',
        'GDFlix': 'https://gdflix.filesdl.in/file/70zgq6J5xYdQRNs'
      },
      '720p': {
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNVjRocWVBSGxic2NrTDJzMVFDZEkwcjc1Rk4tLUlFVXNtVnRnN2txQmVfeEdFWlkzMEozNEFtQWpmMlgzQTdnP2tleT1VV0ZHUldnMU9WTTVlVzlCU2xFMVlrWnVOQzE1VkdKcWFFUnpWM2xS&token=MjkwNjI1',
        'HubCloud': 'https://hubcloud.ink/drive/dt18rd00soq1gdz'
      },
      '1080p': {
        'Uptomega': 'https://uptomega.net/e1jcl4qv673y',
        'GDTot': 'https://new20.gdtot.dad/file/3463926912',
        'HubDrive': 'https://hubdrive.wales/file/2873678992',
        'FilePress': 'https://new4.filepress.live/file/685fd7302e08d7a39566e19e',
        'ClickNUpload': 'https://clicknupload.cfd/uehe7td7s9no',
        'DropDownload': 'https://drop.download/yuq2pv7q98u0',
        'FileDot': 'https://filedot.top/jxx748b99w2i',
        'Frdl': 'https://frdl.io/eu2niacxmowq',
        'MegaUp': 'https://megaup.net/4b6ea51b83f22d198c704c5851196fe2/Kannappa_(2025)__www.moviespapa.immo_Hindi_1080p_HDTS_3.2GB.mkv',
        'MxDrop': 'https://mxdrop.to/f/jdpor7r9b1xgq',
        'StreamTape': 'https://streamtape.to/v/LYlObbP10YFR0V7',
      },
      '1080p HQ V2': {
        'HubDrive': 'https://hubdrive.wales/file/11186157060'
      }
    }
  },
  'stolen': {
    title: 'Stolen',
    fileSizes: ['891.24MB', '1.92GB', '10.14GB'],
    downloadLinks: {
      '720p': {
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPX1hfY0E3ZHZodDRHdmttZTJsdVdmUzIyQkRtOFFWaXNFNU42QVNHbDBqYUNYU2FlaFZVMWszSHFlVVpwcTV3P2tleT1UbTUxVFhoUVVESndXSE5IV1haUFkySldTRkJVWjNrMlVXVlNTbTVC&token=MjkwNjI1',
        'BotDD': 'https://botdd.filesdl.in/dl/dla.php/?id=Xzk5X0hSMF84M19ITTZMXzIzXzl3Xzk5X1hfOF9fNDdfXzkxX0dSXzIzX1lTNV84N19fOTFfXzRfOV84X184M19HXzMwX18yNl9aXzU1X180N19fODhfWlM5SE5VXzY1X0tOMk5ET0E9PQ==',
        'HubCloud': 'https://hubcloud.ink/drive/hvccampx00jfhvj'
      },
      '1080p': {
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNcjh1UzZOZHJNQ1pBcklqNVpKbnNrcmc1Z2FjTHZ3OVFuZnZLMFBFUmZOS2lPYVAydXlsQVJFZmhiVHpFU293P2tleT1OMTlNZVdWck5YUjRVRlpHVURjMlVHUmZaMHhTYW5GM1RrOVlTSFZC&token=MjkwNjI1',
        'HubCloud': 'https://hubcloud.ink/drive/39epqxz9xadqgmg',
        'BotDD': 'https://botdd.filesdl.in/dl/dla.php/?id=Xzk5X0hSMF84M19ITTZMXzIzXzl3Xzk5X1hfOF9fNDdfXzkxX0dSXzIzX1lTNV84N19fOTFfXzRfOV84X184M19HXzMwX18yNl9aXzU1X180N19fODhfWlM5SE5VXzY1X0tOMk5ET0E9PQ=='
      },
      '4K': {
        'HubCloud': 'https://hubcloud.ink/drive/l2t2bvqqv17e8sl',
        'GDFlix': 'https://gdflix.filesdl.in/file/DFyzVdion0Vx1bT',
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQS3JZZGxiNHF4YmpFMzk2aGNnNnp1bVZmT3ZPY2J5X29XQ3JJaFAxWlA4OVdEbWJPMzVZWjVTdGZCRFJfSUpBP2tleT1UMmwwT0RZMFFsRmtlSEJ1ZVZrdFRqSjBOR3R0VUc1VVR6bHJVVlpu&token=MjkwNjI1'
      }
    }
  },
  'bhool-chuk-maaf': {
    title: 'Bhool Chuk Maaf',
    fileSizes: ['1.1GB', '6.13GB', '13.18GB'],
    downloadLinks: {
      '720p': {
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOY2xGU1NPVjFnakdLUnU3aGI0WDY1dURIYUJKWEE5Y18yMnFtZnUzVVVpcjQ5a0lYQ1ZJSnhPc3V4TDU3YU9RP2tleT1ZV3h5WVZwcWFUaFllbE5CTkdSWFlVWjZWVXBTYTE5RVUzSnFPVTEz&token=MjkwNjI1',
        'HubCloud': 'https://hubcloud.ink/drive/j0hi44081biwmoq'
      },
      '1080p HQ': {
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQUFN5ZTV6SUtIcmJOell5ZDRwNUNCVWJfNE9pN2ZteGVudnY1Z0diVV9CTlZDQm9VVzlWM1hMLUhvSE9jVWd3P2tleT1jVTVmZDJGT2EwcG1kelZ1WnpWUlFYSkZTM1oyVFVRNGFEQkZVRmxC&token=MjkwNjI1',
        'HubCloud': 'https://hubcloud.ink/drive/fhbclccrgyglhcr',
        'BotDD': 'https://botdd.filesdl.in/dl/dla.php/?id=Xzk5X0hSMF84M19ITTZMXzIzXzl3Xzk5X1hfOF9fNDdfXzkxX0dSXzIzX1lTNV84N19fOTFfXzRfOV84X184M19HXzMwX18yNl9aXzU1X180N19fODhfWlM5SE5VXzY1X0tOMk5ET0E9PQ=='
      },
      '4K': {
        'HubCloud': 'https://hubcloud.ink/drive/nmnvxbhhhxxsbqq',
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBON0FrMF83RHJQVjlPdTg5d3ViUEVzckxaYjVBTlBrRG1jVC1CLWJFaHpCZ2Zac1JBV0FTODhrbVhDZEdzU0d3P2tleT1ObkF3VERCUWRETkRWbmh5VG5FNFJUZE1MVzFmVDFWc01GZEtlWGQz&token=MjkwNjI1',
        'BotDD': 'https://botdd.filesdl.in/dl/dla.php/?id=Xzk5X0hSMF84M19ITTZMXzIzXzl3Xzk5X1hfOF9fNDdfXzkxX0dSXzIzX1lTNV84N19fOTFfXzRfOV84X184M19HXzMwX18yNl9aXzU1X180N19fODhfWlM4XzI4X1RfNDdfQTRXR0ZNWkE9PQ=='
      }
    }
  },
  'leo': {
    title: 'LEO',
    downloadLinks: {
      '720p': {
        
        'HubCloud': 'https://hblinks.pro/archives/68985',
       
      },
      '1080p': {
        
        'hubdrive': 'https://hubdrive.wales/file/1700815062',
        
      },
      '4k': {
       
        'Hubdrive': 'https://hubdrive.wales/file/1701858883',
        
      }
    }
  },
  'vikram': {
    title: 'Vikram',
    downloadLinks: {
      '1080': {
        
        'HubCloud': 'https://hubcloud.art/drive/urrag8mwgckkxj1',
        'Direct Download': 'https://skydrop33.me/fr/id/?file=AF1QipN-FwyDHZNRS5xMVzYwQCtAsEHRyNRQZ6e7p1lg'
      },
      '4k': {
        'fastxyz': 'https://wwa.fastxyz.in/xfile.php?id=Mjlrc2FhYnFmYjFsemUw',
        'HubCloud': 'https://hubcloud.art/drive/ghqfugyr91htyer',
        'Direct Download': 'https://skydrop33.me/fr/id/?file=AF1QipPVo5cE53gbI91WmEc7I0m5WKRH8GOTkwyAa740'
      }
    }
  },
  'kaithi': {
    title: 'Kaithi',
    downloadLinks: {
      '480p': {
        'Gd': 'https://new10.gdflix.dad/file/aJBA1COm0uMGEsf',
        'HubCloud': 'https://hubcloud.one/drive/gepxvnm6inemllq',
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNdkp1MU9rUXdFZUVTcVZER0NwekVpNzNVZzNZMmVsdnZ6dFFUSHNKU003TmU5RVZwbFk4bjlaMTUtV2ZXcnlBP2tleT1lVFpFWDNFNVIyaG9SbWhWY2tOWlQzTkNiRkJhYkU1MFVGTkVaVEIz&token=MjkwNjI1'
      },
      '720p': {
        'Gd': 'https://new10.gdflix.dad/file/OH3EPClIvuX6Rxy',
        'HubCloud': 'https://hubcloud.one/drive/812iuddi81ii8dh',
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNdlBwWFBiMkxvQ2NtWU1DbGhjdkczbnZZQ1V5c3pqQ2NLSEdTa3Y1dVl2OHBuTFN6OTZTT29udTEteWZWTE5BP2tleT1iR0prUzJjMVVWZDRSMUpWUkhCR1JIWjNXSFJWYUZCMVpsaHpjSEIz&token=MjkwNjI1'
      },
      '1080p HQ': {
        'Gd (Resumable)': 'https://new10.gdflix.dad/file/qmm5vbwnfGdxmCL',
        'HubCloud': 'https://hubcloud.one/drive/vefdnjtggutfz1j',
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNcjNSbnhTb2xmbzdTUkhuM0N3OTE3Nlp5UnVvdTNsU184ZmFpVmhTRkoyYmFuSFpqYVZaOGZqQnNzbWhyYmp3P2tleT1XRmhqTFUwdGREQlhTVUYyTWtWRlExVjJTVUZYYWpONWFrMXFhVFZu&token=MjkwNjI1'
      }
    }
  },
  'hit-the-third-case': {
    title: 'HIT: The Third Case',
    downloadLinks: {
      '720p': {
        
        'HubCloud': 'https://hblinks.pro/archives/90846',
      
      },
      '1080p': {
       
        'HubCloud': 'https://hubdrive.wales/file/6289157964',
        
      },
      '4K': {
        
        'HubCloud': 'https://hubdrive.wales/file/25441541221',
       
      }
    }
  },
  'crazyx': {
    title: 'CrazyX',
    downloadLinks: {
      '480p': {
       
        'HubCloud': 'https://hblinks.pro/archives/86835',
        
      },
      '1080p': {
       
        'HubCloud': 'https://hubdrive.wales/file/6384220275',
        
      },
      '4k': {
   
        'HubCloud': 'https://hubdrive.wales/file/3414987824',
       
      }
    }
  },
  'kalki': {
    title: 'Kalki 2898 AD',
    downloadLinks: {
      '780p': {
        'HubCloud': 'https://hblinks.pro/archives/76965',
      },
      '1080p': {
        
        'HubCloud': 'https://hubdrive.wales/file/2018140782',
        
      },
      '4k': {
        
        'HubCloud': 'https://hubdrive.wales/file/23109287566',
       
      }
    }
  },
  'taare-zameen-par': {
    title: 'Taare Zameen Par',
    downloadLinks: {
      'torent': {
        
        'HubCloud': 'https://archive.org/download/taare-zameen-par-hindi-educational-movie/Taare%20Zameen%20Par%20Hindi%20Educational%20Movie.mp4',
      
      }
    }
  },
  'chawa': {
    title: 'Chawa',
    downloadLinks: {
      '720p': {
       
        'HubCloud': 'https://hblinks.pro/archives/88115',
      
      },
      '1080p': {
       
        'HubCloud': 'https://hubdrive.wales/file/2360533050',
       
      },
      '4k': {
        
        'HubCloud': 'https://hubdrive.wales/file/16240035173',
        
      }
    }
  },
  'bou-buttu-bhuta': {
    title: 'Bou Buttu Bhuta',
    downloadLinks: {
      '1080p': {
        'Gofile': 'https://gofile.io/d/vlMOSu'
      }
    }
  },
  'f1': {
    title: 'F1 The Movie (2025) Hindi Dubbed Full Movie PreHDRip',
    downloadLinks: {
      '480p': {
        'Gofile (Resumable)': 'https://gofile.io/d/ImcJVE',
        'HubCloud': 'https://hubcloud.one/drive/ltxlrife4reerpe',
        'Direct Download': '#'
      },
      '720p': {
        'Gofile (Resumable)': 'https://gofile.io/d/IUOgmb',
        'HubCloud': 'https://hubcloud.one/drive/1ektwrxy8semxxe',
        'Direct Download': '#'
      },
      '1080p': {
        'Gofile (Resumable)': 'https://gofile.io/d/LW2de3',
        'HubCloud': 'https://hubcloud.one/drive/z7cztmsa7y1tnyu',
        'Direct Download': '#'
      }
    }
  },
  'maa': {
    title: 'Maa (2025) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'Gofile (Resumable)': 'https://gofile.io/d/Q86USD',
        'HubCloud': 'https://hubcloud.one/drive/i10nq4inkn3innz',
        'Direct Download': '#'
      },
      '720p': {
        'Gofile (Resumable)': 'https://gofile.io/d/eaOdjk',
        'HubCloud': 'https://hubcloud.one/drive/259vcb1apkfqyn2',
        'Direct Download': '#'
      },
      '1080p': {
        'Gofile (Resumable)': 'https://gofile.io/d/UGyzKt',
        'HubCloud': 'https://hubcloud.one/drive/xkgkbc0mqmnch9l',
        'Direct Download': '#'
      },
      '1080p V2': {
        'HubCloud': 'https://hubdrive.wales/file/6241276856',
        'Server': 'HubDrive'
      }
    }
  },
  'housefull-5': {
    title: 'Housefull 5 Part A (2025) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'Gofile (Resumable)': '#',
        'HubCloud': 'https://hubcloud.one/drive/q5anllnus9hladk',
      },
      '720p': {
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPT2JaLWVNeXlnd0F3NVI2VjBJZm12SHUydHc3Y1dGT2l6VURtS2tZWG5fbVFqRjBadlVaVkRiWnB1NUE3VnlBP2tleT1jelF4TkU5WVFXcDROVkJWUlRSdFUwaHVaMEpTTjE5SldWZHhWWFZu&token=MjgwNjI1',
        'Fastcloud': 'https://botdd.filesdl.in/dl/dla.php/?id=Xzk5X0hSMF84M19ITTZMXzIzXzl3Xzk5X1hfOF9fNDdfXzkxX0dSXzIzX1lTNV84N19fOTFfXzRfOV84X184M19HXzMwX18yNl9aXzU1X180N19fODhfWlM5VVoyXzg3X181NV9TM1pfNjBfV0E9PQ==',
        'GD-flix': 'https://gdflix.filesdl.in/file/JFKJthSkIecdSUK'
      },
      '1080p': {
        'Gofile (Resumable)': 'https://gofile.io/d/CsIo6x',
        'HubCloud': 'https://hubcloud.ink/drive/wwuwm446111jjem',
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOcDdWcVhxekR4bHdNQXEzOHRYbzdxZGJkdlYxd3RpZWRsUzRkZG8wSElQTEJMTzczVGlobFBTWnJ2eUY2RVdnP2tleT1jWFZrVlRCWExXRjZWRFZQTFhKcmRHd3pjRXhYUXpWYWRtVTJjVzlS&token=MjgwNjI1'
      }
    }
  },
  'kubera': {
    title: 'Kubera (2025) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'Gofile (Resumable)': 'https://gofile.io/d/PgOk8I',
        'HubCloud': 'https://hubcloud.ink/drive/gmgxwzp9lmlhquu',
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNU0NHZEtIN0hIUU12OHNhaXc0Nmg3Q0VaM05ac3g2cXNlX3lzTDhsVlA1dGtYZG13TXFzWDA5cnBRWU5BZXd3P2tleT1UVU5RYzI1cU56WndhRE5tWlc5clkyeElOMHg0VUY5eFozaGZXVXBC&token=MjgwNjI1'
      },
      '720p': {
        'Fastcloud': 'https://botdd.filesdl.in/dl/dla.php/?id=Xzk5X0hSMF84M19ITTZMXzIzXzl3Xzk5X1hfOF9fNDdfXzkxX0dSXzIzX1lTNV84N19fOTFfXzRfOV84X184M19HXzMwX18yNl9aXzU1X180N19fODhfWlM5VVoyXzg3X181NV9TM1pfNjBfV0E9PQ==',
        'HubCloud': 'https://hubcloud.ink/drive/8rw4bqs1ddpd9mx',
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOQ2s0TXhpYlRWN2VZalhvSnNucGVpMk1faEg1eXpkMWs0Y1d2TnZDU2FoUUYyX0pITVZmbm1jRDh4Wjl3ZzB3P2tleT1WRUpaVW5oWFdGQm1jM05mV2tSa2QzcG9OVkZhYTNKbVNtTTRiRkZC&token=MjgwNjI1'
      },
      '1080p': {
        'fast': 'https://botdd.filesdl.in/dl/dla.php/?id=Xzk5X0hSMF84M19ITTZMXzIzXzl3Xzk5X1hfOF9fNDdfXzkxX0dSXzIzX1lTNV84N19fOTFfXzRfOV84X184M19HXzMwX18yNl9aXzU1X180N19fODhfWlM5XzU1X1NGQjRfOTFfXzMwX1oxVXc9PQ==',
        'HubCloud': 'https://hubcloud.ink/drive/wosssdtqdymqbiu',
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQRmE5bzRVbzJFOC1VczdTMExaUUV3RTF5U2pqVTViR3FlSFIwQTVla3o5TUlUX0hHcFRULWRfM3VXU3QyRzZ3P2tleT1ORk5FZEZseE9XWklRbVIxVmpGc2RXOTNZVTl0YmtreGRHUjJObU5u&token=MjgwNjI1'
      }
    }
  },
  'jawan': {
    title: 'Jawan (2023) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'Gd': 'https://gdflix.filesdl.in/file/3l66jN11NQte9eT',
        'HubCloud': 'https://hubcloud.ink/drive/kqiz8kl383jpp8j',
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPcGFVbDhwbVRJc2RLb0J4VGFrVkpseHpFcjV4eHRGUFRpWEZjUFc4WmxjNnVDek5palBmajg2SUZST2NkQW1BP2tleT1TbHB0YmxwbVNHSmFkQzB6T0VwR016WkhWSGx4ZVdOck5rcGhiV3gz&token=MjgwNjI1'
      },
      '720p': {
        'GD (Resumable)': 'https://gdflix.filesdl.in/file/HFQgXZTPV69iKNg',
        'HubCloud': 'https://hubcloud.ink/drive/vivd0ddlctqplmt',
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOWUVKWUJ4MVllaklMWmd5SjNmTnlxY3lqS0c1YTR0RC1mRnJYN0wxb2piNjByY2dKNm1wek9YTExDcTA2d0h3P2tleT1OR1JwVTNBNExYWkJTV3QxYkhaeVRGTTNkMFJSY0Rock5qWXpWRFZS&token=MjgwNjI1'
      },
      '1080p HQ': {
        'GD': 'https://gdflix.filesdl.in/file/ibVwmcKyoresKCu',
        'HubCloud': 'https://hubcloud.ink/drive/neacd5qr15rwntu',
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQVDZnWWdWbGJIMmR4NWdFTU1SV3ZNTTNJRkhmUnI5R3lpVnh4Si14bGZhTGVLVzVfVEs3YmVGNjhkUVc3Z1Z3P2tleT1OMU10V0c1VVJXd3haMVF4U1ZOcGQxcEJjVTQxVjJwZk0zcGZiM0Zu&token=MjgwNjI1'
      }
    }
  },
  'animal': {
    title: 'Animal (2023) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'GD': 'https://new.gdflix.ink/file/e8OUauclb4',
        'HubCloud': 'https://hubcloud.art/drive/ctmm2qiapfitv2i',
        'Direct Download': 'https://hubcloud.art/video/qti1qf5ga2fjsmg'
      },
      '720p': {
        'GD': 'https://new.gdflix.ink/file/pfobvEg5LA',
        'HubCloud': 'https://hubcloud.art/drive/onkfonw4wclvuii',
        'Direct Download': 'https://hubcloud.art/video/4nkjpwl4pconoc1'
      },
      '1080p': {
        'GD': 'https://new.gdflix.ink/file/mMkz8wVvwV',
        'HubCloud': 'https://hubcloud.art/drive/gnasgrf4ucjqqnr',
        'Direct Download': 'https://hubcloud.art/video/p6gforxf8rgu1gx'
      }
    }
  },
  '12th-fail': {
    title: '12th Fail (2023) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'GD': 'https://dart.gdflix.ink/file/jH2JOkqqlA',
        'HubCloud': 'https://hubcloud.art/drive/zbs7aarzanbz7sw',
        'Direct Download': 'https://hubcloud.art/video/yf7sszoizezsan1'
      },
      '720p': {
        'Gd(Resumable)': 'https://dart.gdflix.ink/file/wcn08mx3q6',
        'HubCloud': 'https://hubcloud.art/drive/wylhtp4v9pazvpq',
        'Direct Download': 'https://hubcloud.art/video/5zf5lo9yyff15pp'
      },
      '1080p': {
        'Gd': 'https://dart.gdflix.ink/file/adIgOc2VqJ',
        'HubCloud': 'https://hubcloud.art/drive/kikuxxxtk_axcwc',
        'Direct Download': 'https://hubcloud.art/video/dkjx8d4nd__qkcx'
      },
      '4k': {
        'Gd': 'https://dart.gdflix.ink/file/0n8PXtgMvD',
        'HubCloud': 'https://hubcloud.art/drive/vh0nllrhhhlqum7',
        'Direct Download': 'https://hubcloud.art/video/qq8vqh_ngtn01hh'
      }
    }
  },
  'sitare-zameen-par': {
    title: 'Sitare Zameen Par (2024) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'Gofile (Resumable)': 'https://gdflix.filesdl.in/file/t0xg6jaj5RlJFD2',
        'HubCloud': 'https://hubcloud.ink/drive/ve9g1v11vcuk0fu',
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOcGZ1dVJqOW9vQ3BNY09kWkRPQTVEcWFHODl6eFkxX1c5MVlhT0FaY0puNzBxcTVsLWM4MTRGdExaSklKbDd3P2tleT1iRmxuT1hZNFVUZE9kVVZCTURaaVRXMXlXR1pTUVhFdFVsVkJaWGQz&token=MjgwNjI1'
      },
      '720p': {
        'Gd': 'https://gdflix.filesdl.in/file/GkIv865sUuvneV3',
        'HubCloud': 'https://hubcloud.ink/drive/awjtqppft7wp1jp',
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNTGIwNmpmcTNOc054WTBiUlBlR0dHRnNRdzVkamdLejNWOHB1TVdqM25jZzhzQ1BtZTc0bU1EMHlwU3dZVUVRP2tleT1iR2h0ZWpGWGNEUkpaMGMyVURVMVNGUjNZMEZsUWpNelZGZGtUbUpS&token=MjgwNjI1'
      },
      '1080p': {
        'Gd': 'https://gdflix.filesdl.in/file/yJgAV8p0ElBpUQm',
        'HubCloud': 'https://hubcloud.ink/drive/xxrwr31x1fawxzh',
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNd29DZ2w3OTUzSVd2aGRMSnd6X2lhempZWk05MnZrX3d2NGI2NW55cVV3SUZmSXoteEhJSnQ3T1RZVlNhb1NBP2tleT1NWEJaWDB0MldVRXhiMnRaTnpFMFQyUTVlVTVUWjB4V2JIVlpjMTkz&token=MjgwNjI1'
      }
    }
  },
  'raid': {
    title: 'Raid (2018) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'HUB DRIVE': 'https://hubdrive.wales/file/2399507681',
        
      },
      '720p': {
        'HUB LINKS': 'https://hblinks.pro/archives/87600',
       
      },
      '1080p': {
        'HUB LINKS': 'https://hblinks.pro/archives/87601',
        
      }
    }
  },
  'kgf-chapter-1': {
    title: 'KGF Chapter 1 (2018) Hindi Dubbed Full Movie',
    downloadLinks: {
      '480p': {
        'HUB LINKS': 'https://hblinks.pro/archives/27143',
      
      },
      '720p': {
        'HUB LINKS': 'https://hblinks.pro/archives/27140',
        
      },
      '1080p': {
        'HUB DRIVE': 'https://hubdrive.wales/file/4629717447',
      
      },
      '4K': {
        'HUB DRIVE': 'https://hubdrive.wales/file/8308174636',
        
      }
    }
  },
  '3-idiots': {
    title: '3 Idiots (2009) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'HB LINKS': 'https://hblinks.pro/archives/88793',
        
      },
      '720p': {
        'HB LINKS': 'https://hblinks.pro/archives/88794',
       
      },
      '1080p': {
        'HB LINKS': 'https://hblinks.pro/archives/88795',
       
      }
    }
  },
  'kantara': {
    title: 'Kantara (2022) Hindi Dubbed Full Movie',
    downloadLinks: {
      '720p': {
        'DRIVE BOT': 'https://drivebots.pages.dev/download/?id=clhBQ3dVTWRmT3gzcFU1VVZtaHg3S1VsZjRjU2ZhNmVoU0VUZ2RyTTR2S0szK1UyOG5ia0xXU25FSytRd2d1bUR2Z2pDcStrVDl4dU1sMlppUHdod1RyTFBBc0JmTFcyaXpPZW5Ldk84WTQ9&do=WXB2N3IzWUtOcFJOTjc2OVVqVXd3Y2xGa0huU0xBNXd0UmxKZ2ZvSkt4bTNhb1lDZFFqQzRWUE1sMWkvSmlJdw==',
        'HubCloud': 'https://hubcloud.ink/drive/x4h_kubxbo_xbak',
        'Direct Download': 'https://video-downloads.googleusercontent.com/ADGPM2nEuRcd9L9WhnMc41T5kYUCfYJB_tSLtdsb9plE-x4lQhjbMxeCtKj5t9P0-THPt5ZMA_tnkrOT2-VL8IpfXAbwG9NebHsEt1cgdjZ8q65P_8rsJY3JLayYtYBJVCmI9RCOMkkzzmECgCSU2NSMtQ2DoOlo9yNIRTuMikRXI0VCS-pUpKYbKP6_MTHItAu3jxn0X5vbhXtQhv4MNbTqpinT6KpjmPIqq2V-RgUVzksbUIipEwtNGObAchlq424xt21pKnQPXU6Rj5J8zRaZhy5COpMASaYAu2HQzDjXrhLXKmrgPQg3rzYpBH6zo_Dec32xJ4TZTfHtMwEZ3-TSdo9VG_KpRa5KaC6IVvZC-kdfm4WnV0AeWkMiuf8R9sUAF_mgPYJ4gxq7k8sGPiBTGtQYxIczJuH2wCuRslNGPkl5LgtOIcaoj9gpOdRF3enGFtM2BAzZ2I08OuXjAhBUa76DwDIEOQT5iyQNychKabBUucFgMqnhHkV_D3ETgwALGJ6_GNlWMgZU9psvW15yuGJOkzr2HQzMiGsLzX0Z4DnWVUyq68bQmjPEqB2ZJvEmJyMh2JG5EW_uXhrI_oGrQ3dCRtu9igG9IHtkIbKUO5GOgDGd7gVTiNIpSatWoihW_P221DcOqT-2-y_f58GT-L87k_MDkYXqXm5xf4cINRIRg5WLlu9eO8-gzFUg0cNIY1uNlXHHRDbqu0uGrlh0LOfQ_bZdISUCgGWlN_KwWqLMp2Ak4CGVpApf31SuLp6ycRZhFwDOvu8NIJhH1FOm4MlIMqDkkFbqGejDqqSp2fxy2xqS6fnQg5GwVY_UyrQj93DSwboIPN8wmtfIjfhp1FCwIpBfNhCgorvkjopZe8gDdyOhyM5RHTyi1XxfxEp_GlNhlI9MdyJlLMjk81QzFfn9ZGL7zxfaIkyFJz1lJB8xvkDV3I_riH6f_dFIP-_YyTZYVb_1Gi4MmLXIfpXL_Jj1VWersy8HzmRSJ96sNn-0nNgPYQ1_EBIpWwKnVx4QsUBoEeE24Jng8U4irUDCR-ACf5GtffcZadYynH_lvSvSwqZTw-Y'
      },
      '1080p': {
        'GD FLIX (Resumable)': 'https://new10.gdflix.dad/xfile/WjLBoEXYZ4',
        'HubCloud': 'https://hubcloud.one/drive/6kc2lhp_gwuozkp=',
        'Direct Download': '#'
      },
      '4K': {
        'GoFLIX': 'https://new10.gdflix.dad/xfile/EadQ3dxcmc?token=N28yUjMyNG9ibFNOMlFFL00vdisyRFltNTlIa1lKeXVvNUhqaUdCT2t4TVZvRmxJOS9veE91TXVyc2l4cHo4YQ==',
        'HubCloud': 'https://hubcloud.ink/drive/mthfsf11sugsuys',
        'Direct Download': 'https://video-downloads.googleusercontent.com/ADGPM2mEYptPXXVvUHwTfBYPal7M-h7RAtnLqJHNAfUvEd1XOhAILBT85p_n2kffP79H6ww7QN79_x5G0imIbPoFSUs3m5KaG3iB0Vygyu5JtB1WdVJ1Z3TTKHyz7AHJo2mZdkxrilFlWNoQt1IP7PmAMyeT_Cc-mDr972DCGkViAGD7TPi3RDviCSBKIIxy4zNezkajpKhf_1qvXbSj7P6BA_5ut82nMM7jNSblqGlClFCFkIEkgNyR6Vg5I1Nwp5Nl-iRwrmuOjoRJzxv8zkQ8uPKfxbjmaj-KE8RzTR-I9CJEbwv5P9yep3fNL1mOZ0rqCqM0a138Z6bZRh3NcGnn3Wo95y88OJMGAhHVVZ2718YmXY1d4tWK_7Rkwk4takVsogYYJS4SwdtP7e7J9vPmdEG_lVE2r3mk_dP2XbDSiE8va6VZIIsUMEr9n_AVqrHPQGh5IGyf8wEf3zcalCH082zSVxfYODf16IajxJkigRX04xxIkKIJLdTUMPyy5PdzTLb8HILn1HTOvQtfv4JMb9RyVCFEEP93uydMWnQUdVZ4IlONePf_3ZPuj6DCwDPydMWlgbzesA8ABT4cIQ3OHlYIsJgQw8S8DDqsSwbi2DHEwQ83hK6CclNMiXhJXhOrJJB6IvSxU15eJ8XlBs7xp1CWZ5idNcsiA4ARFT-mnW4_teJFutXJU-uNkyRulGEsE-Nj1dNwM9yELoT25EWKqmUexVxH6DxAcPNMbstjRrRnVEcIr6m-q_ygj07ahSV4JflOzKUWlR3mATkeIuzCmf2_INlt5b1i_FDsEdDW6sqBx0h4XgKpq2TYS8yzq2JQ857IR2a11m1t7QGIY32wsODzGh8mQVd-4_z4kiy2eRDgafu0ciaAKTkMdoFD7cJF0-BMZSBIGerQHoprIjXYP_slCgkoubgMdH3aYWL3H3WEVIG2ASK9n3K678X-xIbzkRjqypNmwhWr2FAyG4iyigloZfChUoHWpYssZDa2sncuGmLdmAzUfUySjwLrsestKETlknoEAeK3Y0ge_BuxxInV0pm-BIY_Vp2CubyXB42P1QeBB1o'
      }
    }
  },
  'saaho': {
    title: 'Saaho (2019) Hindi Dubbed Full Movie',
    downloadLinks: {
      '720p': {
        'HB LINKS': 'https://hblinks.pro/archives/72602',
        
      },
      '1080p': {
        'HB LINKS': 'https://hblinks.pro/archives/72601',
       
      },
      '4k SDR': {
        'HUB DRIVE': 'https://hubdrive.wales/file/1710758298',
        
      }
    }
  },
  'padakkalam': {
    title: 'Padakkalam (2024) Hindi Dubbed Full Movie',
    downloadLinks: {
      '480p': {
        'HUB LINKS ': 'https://hblinks.pro/archives/91535',
        
      },
      '720p': {
        'HUB LINKS': 'https://hblinks.pro/archives/91535',
       
      },
      '1080p HQ': {
        'HUB DRIVE': 'https://hubdrive.wales/file/1901387657',
        
      }
    }
  },
  'pk': {
    title: 'PK (2014) Hindi Full Movie',
    downloadLinks: {
      '1080p': {
        
        'Hblinks': 'https://hblinks.pro/archives/84207',
        
      }
    }
  },
  'salar': {
    title: 'Salaar: Part 1 - Cease Fire (2023) Hindi Dubbed Full Movie',
    downloadLinks: {
      '480p': {
        'HUB LINKS': 'https://hblinks.pro/archives/70950',
      
      },
      '720p': {
        'HUB LINKS': 'https://hblinks.pro/archives/70942',
    
      },
      '1080p': {
        'HUB DRIVE': 'https://hubdrive.wales/file/1708067220',
        
      },
      '4K': {
        'HUB DRIVE': 'https://hubdrive.wales/file/1708067901',
        
    }
    }
  },
  'fighter': {
    title: 'Fighter (2024) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'HUB LINKS': 'https://hblinks.pro/archives/72656',
       
      },
      '720p': {
        'HUB LINKS': 'https://hblinks.pro/archives/72655',
        
      },
      '1080p': {
        'HUB LINKS': 'https://hblinks.pro/archives/72654',
       
      },
      '1080P WEB-DL': {
        'HUB CLOUD': 'https://hubcloud.one/drive/vw9lrsx1yv1dz7r',
      } 
    }
  },
  'thug-life': {
    title: 'Thug Life (2024) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'HUB LINKS': 'https://boreaddingobserve.com/np0ww313?pdiij=9&refer=https%3A%2F%2Fcdn.cdn4bot.xyz%2FThug.Life.2025.480p.WEB-DL.Hindi.ORG-Tamil.HC-ESub.x264-HDHub4u.Ms.mkv&kw=%5B%22download%22%2C%22link%22%2C%22generated%22%5D&key=28a0aa228637c5b9ede06eaaec149074&scrWidth=432&scrHeight=960&tz=5.5&v=25.6.3701&ship=&psid=hubcdn.fans,hubcdn.fans&sub3=invoke_layer&res=14.229&dev=r&uuid=91f478a6-c487-4f3b-b457-4412844a3b63%3A2%3A1',
        
      },
      '720p': {
        'HUB LINKS': 'https://hblinks.pro/archives/92153',
       
      },
      '1080p': {
        'HUB DRIVE': 'https://hubdrive.wales/file/3555697688',
        
      },
      'HQ': {
        'HUB DRIVE': 'https://hubdrive.wales/file/5040955659',
       
      }
    }
  },
  'daman': {
    title: 'Daman (2024) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'hb links': 'https://hblinks.pro/archives/78215',
       
      },
      '720p': {
        'hb links': 'https://hblinks.pro/archives/78214',
        
      },
      '1080p': {
        'pixel': 'https://pixeldrain.dev/api/file/h7ah7okB?download',
        'HubCloud': 'https://hubcloud.one/drive/ffnxetnsqnxknnk',
        'Direct Download': 'https://pub-3b5a6c100c044e17abab5b475d004100.r2.dev/Daman.2022.HQ.1080p.WEB-DL.Hindi.Line.ESub.x264-HDHub4u.Tv.mkv'
      }
    }
  },
  'retro': {
    title: 'Retro (2024) Hindi Full Movie',
    downloadLinks: {
      '720p': {
        'HUB LINKS': 'https://hblinks.pro/archives/90930',
        
      },
      '1080p': {
        'HUB DRIVE': 'https://hubdrive.wales/file/8952916539',
        
    },
       '4k': {
      'HUB DRIVE': 'https://hubdrive.wales/file/6997485959',
         
    }
    }
  },
  'dangal': {
    title: 'Dangal (2016) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'FILES DL': 'https://new3.filesdl.site/cloudcab/5QvkhIpF8B',
      
      },
      '720p': {
        'FILES DL': 'https://new3.filesdl.site/cloudcab/oOWITBeZ6p',
        
      },
      '1080p': {
        'FILES DL': 'https://new3.filesdl.site/cloudcab/l9XnYDgzvb',
        
      }
    }
  },
  'bahubali-the-beginning': {
    title: 'Baahubali: The Beginning (2015) Hindi Dubbed Full Movie',
    downloadLinks: {
      '480p': {
        'Hb links': 'https://hblinks.pro/archives/70391',
       
      },
      '720p': {
        
        'Hb links': 'https://hblinks.pro/archives/70389',
        
      },
      '1080p': {
        'hb links': 'https://hblinks.pro/archives/70387',
        
      }
    }
  },
  'raid-2': {
    title: 'Raid 2',
    downloadLinks: {
      '480p': { 'Direct Download': '#' },
      '720p': {
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPZklUMmg3VnIwbGhJSGdpczRRVzlZeHdFc1h4S3NiT2lOdmM4S0hHbnZIWEN4M2tSUEI2bzY5d3JlNElIQmNBP2tleT1iVWRsYVRFNGRIQmZSV00zUm0xalMwOUtTRTVJTkRCRVZ6aDVUV1JC&token=MzAwNjI1',
        'HubCloud': 'https://hubcloud.ink/drive/qrk2uqmuurqyggc',
        'BotDD': 'https://botdd.filesdl.in/dl/dla.php/?id=Xzk5X0hSMF84M19ITTZMXzIzXzl3Xzk5X1hfOF9fNDdfXzkxX0dSXzIzX1lTNV84N19fOTFfXzRfOV84X184M19HXzMwX18yNl9aXzU1X180N19fODhfWlM5XzRfTVhWd185MV8wRTNXUT09'
      },
      '1080p': {
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNWWxfMFhCOHFjMWtfcUNkMGpoZ0JJUGE0U3JpRER1REpoUFJXZ2VRSGEtMkRIclhjSmJRY1UwSG92NHFCWXhRP2tleT1hWFpEVFRoQ1VYUXhhREZoTlVSc1kweFFYMVZoV0V4eFV6UldhSEoz&token=MzAwNjI1',
        'HubCloud': 'https://hubcloud.ink/drive/ffxabvvj3jj3bqx',
        'GDFlix': 'https://new10.gdflix.dad/file/Oc9DGQUQk9A0RGA'
      },
      '4K': {
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNdG9MLXdqZ2NfMGtFbXRaY3B4WEpKMjQxVTUwOFVWcGhlVC1KTFFNbm1ESWI2RmI4WTlXUnQ5ZTd6YWVCd2dnP2tleT1SbEYzVUZGa01Hc3haREZYV0ZGUlUycGFVWFF4Vm5jdGRFeGpOVnAz&token=MzAwNjI1',
        'HubCloud': 'https://hubcloud.ink/drive/td0obffokauoo0o',
        'BotDD': 'https://botdd.filesdl.in/dl/dla.php/?id=Xzk5X0hSMF84M19ITTZMXzIzXzl3Xzk5X1hfOF9fNDdfXzkxX0dSXzIzX1lTNV84N19fOTFfXzRfOV84X184M19HXzMwX18yNl9aXzU1X180N19fODhfWlM5NFVEUl84X182NF9IUlVSQT09',
        'GDFlix': 'https://gdflix.filesdl.in/file/h47UTtU5DnYHJ5J'
      }
    }
  },
  'ghajini': {
    title: 'Ghajini (2008) Hindi Full Movie',
    downloadLinks: {
      
      '720p': {
        'HubCloud': 'https://hubcloud.ink/drive/qht6ara88qugfc3',
        'GDFlix': 'https://gdflix.filesdl.in/file/IzQtcLap7EGZqR5'
      },
      '1080p': {
        'Direct Download': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNLXFuMEJsWEdRWnozY2E5QjUxeG9fNlV5WThSaXFWWS1aN1pBOG5faTZDRllWSTlrUkg3bjdXS0VwVlI0Ukd3P2tleT1jRmd5TjE4eGJsOTJSMW8xYjJkRWIwY3lhR2MzTVRsUlVERkpiWGhS&token=MzAwNjI1',
        'HubCloud': 'https://hubcloud.ink/drive/ap95td5pmus5hd1',
        'GDFlix': 'https://gdflix.filesdl.in/file/hGOWoLE4DvkkK5t'
      }
    }
  },
  'war': {
    title: 'War (2019) Hindi Full Movie',
    downloadLinks: {
      '720p': {
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOdVdHSWJPU0ZkS2N1RmlNd1k0bVQ5bzV5ZW1tZ1lFdFBmdXdQUllfWGJfY0pucmNmd1M1TEx1ZGVhLUQ3NWVnP2tleT1jVFo0VFRVelJ6QlBiV0ZMVnpGNExUWlNWRXRYWjBweVMzaHpkVFZu&token=MzAwNjI1',
        'HubCloud': 'https://hubcloud.ink/drive/1lqqwklq7fkq1t1'
      },
      '1080p': {
        'HubCloud': 'https://hubcloud.ink/drive/fx51ft1sqdabqad',
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPejRuX3Fod0wzV2tabk14R3hDYUwzNzBPb3l4eld5UEdZT0xCSkM0S2VFVzRRb29wSmY2Vk01QVVOWmRfQ0VRP2tleT1RbXRFTmtOWVEwbzNhMUJYTVd0Rk5HbE1Ra3RPVm5Wc1UyWjJOVTVu&token=MzAwNjI1',
        'GDFlix': 'https://gdflix.filesdl.in/file/kGSaSsFar6'
      }
    }
  },
  'pathaan': {
    title: 'Pathaan (2023) Hindi Full Movie',
    downloadLinks: {
      '480p': {
        'HubCloud': 'https://hubcloud.one/drive/sxfvrtwgvswo1oa'
      },
      '720p': {
        'HubCloud': 'https://hubcloud.one/drive/dmjzd7ivzijdzj9'
      },
      '1080p': {
        'HubCloud': 'https://hubcloud.one/drive/dsj1znsgwzggwp8'
      }
    }
  },
  'kill': {
    title: 'Kill',
    downloadLinks: {
      '4K': {
        'HubCloud': 'https://hubcloud.one/drive/c6xx1p7sf4dxdo8',
       
        'Fastxyz': 'https://wwa.fastxyz.in/mfile.php?id=N3c5ZHFobTdrMWJ3aGt3'
      }
    }
  },
  'marco': {
    title: 'Marco',
    downloadLinks: {
      '4K': {
        'HubDrive': 'https://hubdrive.wales/file/3006825682',
       
      },
      '1080p': {
        'HubDrive': 'https://hubdrive.wales/file/9471341723',
      
      }
    }
  },
  'avesham': {
    title: 'Avesham (2024) Malayalam Full Movie',
    downloadLinks: {
      '1080p': {
        'HubCloud': 'https://hubcloud.ink/drive/o8n5gwfzl_9uod1',
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNRVFFSVZzNWNuZVdYVmdsNG1FVUZkTVdsandocElnVnRFblMwRWVWeE82ZW1sV3JtNEZLR241U08wMmJMOEl3P2tleT1kSHBQVW1SSmNYVTRTblZ6V0RSRFdtdzJNVzkxV1ZsTmNqUkJNamRu&token=MDEwNzI1',
        'GDFlix': 'https://gdflix.filesdl.in/file/q70G8tyc4w',
        'Direct Download': '#'
      },
      '4K': {
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQdkNUbHRrU3IxR2Fyd2hSd1hJNW5TZTU5T1htRUdOYzFqVU5MeGJZQWRnZHFZa0lMbDlFb3VuRm5tTVB6MnJRP2tleT1Na0pmVTJjNFNreE1lSEpYVmtNeU5HWktSVWswTlZJeGNuUXdTbTUz&token=MDEwNzI1',
        'HubCloud': 'https://hubcloud.ink/drive/hylm7s2o1332yql',
        'GDFlix': 'https://gdflix.filesdl.in/file/Vm75J1d5QV'
      }
    }
  },
  'premalu': {
    title: 'Premalu (2024) Malayalam Full Movie',
    downloadLinks: {
      '1080p': {
        'HubCloud': 'https://hubcloud.one/drive/b8dfqjw7ebee9ud',
        
      },
      '4k': {
        'HubCloud': 'https://hubcloud.one/drive/4qfznnqwmfkzzmy'
      }
    }
  },
  'maharaja': {
    title: 'Maharaja',
    downloadLinks: {
      '4K': {
        'HubDrive': 'https://hubdrive.wales/file/14536349588',
      
      },
      '1080p': {
        'HubDrive': 'https://hubdrive.wales/file/2398324351',
       
      }
    }
  },
  'thunderbolts': {
    title: 'Thunderbolts',
    downloadLinks: {
      '4K': {
        'HubDrive': 'https://hubdrive.wales/file/9732390517',
        'Server': 'HubDrive'
      },
      '1080p': {
        'HubDrive': 'https://hubdrive.wales/file/4533201536',
        'Server': 'HubDrive'
      }
    }
  },
  'ballerina': {
    title: 'Ballerina',
    downloadLinks: {
      '4K': {
        'DriveLeech': 'https://driveleech.net/file/uNbtkbNc62',
        'Server': 'DriveLeech'
      },
      '1080p': {
        'DriveLeech': 'https://driveleech.net/file/tDgBQwWV1U',
        'Server': 'DriveLeech'
      }
    }
  },
  'escape-from-the-21st-century': {
    title: 'Escape from the 21st Century',
    downloadLinks: {
      '1080p': {
        'DriveLeech': 'https://driveleech.net/file/AkNw25qYcCECxjbbisPc',
       
      }
    }
  },
  'oppenheimer': {
    title: 'Oppenheimer',
    downloadLinks: {
      'UHD.BluRay.2160p IMAX': {
        'HubCloud': 'https://your-imax-uhd-bluray-2160p-link-here.com'
      },
      'IMAX.1080p.BluRay': {
        'DriveLeech': 'https://driveleech.net/file/VCCh8UnJskHPGiKZSyyf'
      }
    }
  },
  'vaamana-2025': {
    title: 'Vaamana (2025) Dual Audio [Hindi & Kannada] Full Movie HD ESub',
    downloadLinks: {
      '1080p': {
        'HubDrive': 'https://hubdrive.wales/file/5773203399a'
      },
      '720p': {
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOSGstVUp6UjFpWWVoaU1jZHJNU21jd0tlem9FUW9KVDUwaVpCUjlmY2llZXNBN3dSbHBhbXEtQ3R4OUluOE93P2tleT1SM1ppVDI1b1dXYzJjREJZYjJ0RU1XMHdZUzF6WVZkTmMxSnFXSHBS&token=MDEwNzI1',
        'HubCloud': 'https://hubcloud.ink/drive/beypgdndlb1rdno'
      }
    }
  },
  'final-destination-2000': {
    title: 'Final Destination (2000)',
    downloadLinks: {
      '1080p': {
        'HBLinks': 'https://hblinks.pro/archives/87523'
      },
      '720p': {
        'HBLinks': 'https://hblinks.pro/archives/87522'
      }
    }
  },
  'final-destination-2-2003': {
    title: 'Final Destination 2 (2003)',
    downloadLinks: {
      '1080p': {
        'HBLinks': 'https://hblinks.pro/archives/84337'
      },
      '720p': {
        'HBLinks': 'https://hblinks.pro/archives/84336'
      }
    }
  },
  'final-destination-3-2006': {
    title: 'Final Destination 3 (2006)',
    downloadLinks: {
      '1080p': {
        'HBLinks': 'https://hblinks.pro/archives/84341'
      },
      '720p': {
        'HBLinks': 'https://hblinks.pro/archives/84340'
      }
    }
  },
  'final-destination-4-2009': {
    title: 'The Final Destination (2009)',
    downloadLinks: {
      '1080p': {
        'HBLinks': 'https://hblinks.pro/archives/84345'
      },
      '720p': {
        'HBLinks': 'https://hblinks.pro/archives/84344'
      }
    }
  },
  'stranger-things-s1': {
    title: 'Stranger Things Season 1',
    fileSizes: ['500MB', '1.32GB', '3.2GB'],
    downloadLinks: {
      '480p': {
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNVjRocWVBSGxic2NrTDJzMVFDZEkwcjc1Rk4tLUlFVXNtVnRnN2txQmVfeEdFWlkzMEozNEFtQWpmMlgzQTdnP2tleT1VV0ZHUldnMU9WTTVlVzlCU2xFMVlrWnVOQzE1VkdKcWFFUnpWM2xS&token=MjkwNjI1',
        'HubCloud': 'https://hubcloud.ink/drive/dt18rd00soq1gdz',
        'GDFlix': 'https://gdflix.filesdl.in/file/70zgq6J5xYdQRNs'
      },
      '720p': {
        'BBDownload': 'https://bbdownload.filesdl.in/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNVjRocWVBSGxic2NrTDJzMVFDZEkwcjc1Rk4tLUlFVXNtVnRnN2txQmVfeEdFWlkzMEozNEFtQWpmMlgzQTdnP2tleT1VV0ZHUldnMU9WTTVlVzlCU2xFMVlrWnVOQzE1VkdKcWFFUnpWM2xS&token=MjkwNjI1',
        'HubCloud': 'https://hblinks.pro/archives/31692'
      },
      '1080p': {
        'Uptomega': 'https://uptomega.net/e1jcl4qv673y',
        'GDTot': 'https://new20.gdtot.dad/file/3463926912',
        'HubDrive': 'https://hubdrive.wales/file/2873678992',
        'FilePress': 'https://new4.filepress.live/file/685fd7302e08d7a39566e19e',
        'ClickNUpload': 'https://clicknupload.cfd/uehe7td7s9no',
        'DropDownload': 'https://drop.download/yuq2pv7q98u0',
        'FileDot': 'https://filedot.top/jxx748b99w2i',
        'Frdl': 'https://frdl.io/eu2niacxmowq',
        'MegaUp': 'https://megaup.net/4b6ea51b83f22d198c704c5851196fe2/Kannappa_(2025)__www.moviespapa.immo_Hindi_1080p_HDTS_3.2GB.mkv',
        'MxDrop': 'https://mxdrop.to/f/jdpor7r9b1xgq',
        'StreamTape': 'https://streamtape.to/v/LYlObbP10YFR0V7',
        'HBLinks': 'https://hblinks.pro/archives/31690'
      }
    }
  },
  'nafratein-2025': {
    title: 'Nafratein (2025)',
    downloadLinks: {
      '1080p HQ': {
        'HubCloud': 'https://hubcloud.one/drive/h7gu6cic7yihr31'
      },
      '1080p': {
        'HubCloud': 'https://hubcloud.one/drive/h7gu6cic7yihr31',
        'FilePress': 'https://new4.filepress.live/file/6860d0cf250203ed8b8a35f5',
        'GDToT': 'https://new20.gdtot.dad/file/7355869274'
      }
    }
  },
  'chachi-420': {
    title: 'Chachi 420',
    downloadLinks: {
      '1080p': {
        'Archive.org': 'https://archive.org/download/HindooPicturesStartWithC1/Chachi_420_1997_1080_Hindi_6CH_Comedy_Drama.mkv'
      }
    }
  },
  'chashme-baddoor': {
    title: 'Chashme Baddoor',
    downloadLinks: {
      '1080p HQ': {
        'Archive.org': 'https://archive.org/download/HindooPicturesStartWithC1/Chaman_Bahaar_2020_1080_Hindi_6CH_Comedy_Drama.mkv'
      }
    }
  },
  'chandu-champion': {
    title: 'Chandu Champion',
    downloadLinks: {
      '1080p': {
        'Archive.org': 'https://archive.org/download/HindooPicturesStartWithC1/Chandu_Champion_2024_1080_Hindi_6CH_Sport_Action.mkv'
      }
    }
  },
  'chennai-express': {
    title: 'Chennai Express',
    downloadLinks: {
      '4K': {
        'Archive.org': 'https://archive.org/download/HindooPicturesStartWithC1/Chennai_Express_2013_1080_Hindi_6CH_Action_Comedy.mkv'
      }
    }
  },
  'sardaar-ji-3-2025': {
    title: 'Sardaar Ji 3 (2025)',
    downloadLinks: {
      '720p HQ': {
        'HubDrive': 'https://hubdrive.wales/file/5682640783'
      }
    }
  },
  'heads-of-states': {
    title: 'Heads of States',
    downloadLinks: {
      '1080p WEB-DL': {
        'HubDrive': 'https://hubdrive.wales/file/11186157060'
      },
      '4K': {
        'HubDrive': 'https://hubdrive.wales/file/11186157060'
      },
      '720p HEVC': {
        'HBLinks': 'https://hblinks.pro/archives/92772'
      }
    }
  },
  'the-monkey': {
    title: 'The Monkey (2025)',
    downloadLinks: {
      '1080p HQ AMZN WEB-DL': {
        'HubCloud': 'https://hubcloud.one/drive/1iij3ljtcdccdis'
      },
      '1080p HEVC': {
        'OxxFile': 'https://new.oxxfile.info/s/vWWnyyIHIu/'
      }
    }
  },
  'aata-thambaycha-naay': {
    title: 'Aata Thambaycha Naay!',
    downloadLinks: {
      'WEB-DL Marathi 2160p 10bit HEVC DDP 5.1 ESub': {
        'Direct Download': 'https://video-downloads.googleusercontent.com/ADGPM2m7ArP1CJUu4IvkCMBxnNvvTYHE5YUHqtK1mzbndhXZRckbWgaiDM4vwzqwRy4l_1NGCS0JChwpv_DwZ_IAghXxaoKBGWgNdh-jikrG8Bx1pXMTIDPw2W2kD9fmwohWz4Jd50MiQ-8jUPH1Lyv39C1K-7q0pUkZkc8FU6Cw-L1i1IhXToBWzZT0eruCBe4TECrbE6DQ8_61QbxC1MPL6Fe_iFg9m-6RkwZXXU0ay86TYBSkBcoQFPKWBS3GSAJjL9Ryvd7u8SfjTy1bvQUaOHzBzwGCMjzfsQT2fHUV5U4qswMgnWCv9QdrT5DMOqqkF7rPMA_aLkbPHQol0O2yMNvl9okVi0DD3HFEZVFlbcJqZ6oL2WMbGNHXROIE3Cbr-J1L8adsAMKA7Mun7HrQhzqGAIjyLO4bnCKPEDWGfzLVgD9GDQoRVXUJ-JLrJWKc4Vfa4JV6UkDt6UpHEHMLgBLvsngR6NiDEoFche5ATMlitM3JCDhCrgWFcjELXhjV6-tJQijhrYgqLUyYFAoCDXfwn_42xn-MygLSPe_SMMf_fuiUU0elL-uc_7adf1S99gTUR5d0H_D6fjhyswqNscsAJeNyeiqpOObS2g22tdH0CxWyVsEuOrSlezZT7pnaghVSbHZddH4ZJZf2qLow-u_YutFKgpBUhOJc35on4QEUifa8QeASNdVpxrr40H1KaRnJqRWDT8k1wmZNl97dOfsD6hToDkeCR9IwGWRULng0wp4AmbHcd0Njj7s1A2hef7k70T7qy_E0kBogudeceFVvTHOs9Wo1iA3W53ji_vpStA1MOWZQn8O-dgtWTN2VY1eljw2jYPuIrfxQvha2iA2W-_iTAtTpyWJyh5c9vupRG3hm1n6gAAJP_R0OabARElOK3Qsz6tkb-uzYxx3WDcUkR79cOebFNBH5307DBKisy7JALmUt6aMQ1Z4H68qsz_T-Y3b_F6hSAHuYNuxQAhfKrgwCTzIBKuz3EINZ-v2X9ku79kdCsD1vsaWB6diLyvww4Dzpt2o02uNCcRtBe9mxL9td1_yrw6qju9PnlbXUxqBU0yM'
      }
    }
  },
  'aho-vikramaarka': {
    title: 'Aho Vikramaarka',
    downloadLinks: {
      'HDTV': {
        'direct': 'https://pixeldrain.dev/api/file/rFFkFbf1?download',
        'CDNBaba': 'https://cdn1.cdnbaba.xyz/Aho%20Vikramaarka!%202024%20HDTV%20Hindi%201080p%20x264%20AVC%20DD%202.0%20CineVood.mkv'
      },
      '720p': {
        'direct': 'https://pixeldrain.dev/api/file/Rn5o8wwM?download',
        'GoogleDrive': 'https://video-downloads.googleusercontent.com/ADGPM2m0h_jqIkzcIG4GscM_f3yYQCDBQ7DXGzzDqPuxlp2q9ECt0gOuJCwgBqUxmvkquRZU3HX8eX_du83NXH9hbME-dgL3Qv-cy9ydnton9rXDMxYL8XJnm9klppZQyVEMQg_4bS_o178gajUya46B5-8FYqqcMWafOlyii4GldxB5Bhi2vSFyAKY0TtuG_dXzDnRWS0cy7kA0ysK29NCulid90Aml7O1-JE8jMYqlDT2RU_S0dyi3i14PVRzsAm772T5-KiKu'
      }
    }
  },
  // Default template for movies/series not in the list
  'default': {
    title: 'Movie Title',
    downloadLinks: {
      '480p': {
        'Gofile (Resumable)': '#',
        'HubCloud': '#',
        'Direct Download': '#'
      },
      '720p': {
        'Gofile (Resumable)': '#',
        'HubCloud': '#',
        'Direct Download': '#'
      },
      '1080p': {
        'Gofile (Resumable)': '#',
        'HubCloud': '#',
        'Direct Download': '#'
      }
    }
  }
}; 