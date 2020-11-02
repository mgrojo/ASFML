GNATdoc.Documentation = {
  "label": "Sf.Audio.Music",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "sfMusic_createFromFile",
          "line": 42,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 42,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_createFromFile",
                      "href": "docs/sf.audio.music.html#L42C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "filename",
                      "href": "docs/sf.audio.music.html#L42C37"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "String"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Create a new music and load it from a file\n"
                },
                {
                  "kind": "span",
                  "text": "This function doesn't start playing the music (call\n"
                },
                {
                  "kind": "span",
                  "text": "sfMusic_play to do so).\n"
                },
                {
                  "kind": "span",
                  "text": "Here is a complete list of all the supported audio formats:\n"
                },
                {
                  "kind": "span",
                  "text": "ogg, wav, flac, aiff, au, raw, paf, svx, nist, voc, ircam,\n"
                },
                {
                  "kind": "span",
                  "text": "w64, mat4, mat5 pvf, htk, sds, avr, sd2, caf, wve, mpc2k, rf64.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "filename",
              "line": 42,
              "column": 37,
              "type": {
                "label": "String"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Path of the music file to open\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "A new sfMusic object (NULL if failed)\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_createFromMemory",
          "line": 59,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 59,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_createFromMemory",
                      "href": "docs/sf.audio.music.html#L59C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "data",
                      "href": "docs/sf.audio.music.html#L59C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Standard.System.Address"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sizeInBytes",
                      "href": "docs/sf.audio.music.html#L59C71"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfSize_t",
                      "href": "docs/sf.html#L123C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Create a new music and load it from a file in memory\n"
                },
                {
                  "kind": "span",
                  "text": "This function doesn't start playing the music (call\n"
                },
                {
                  "kind": "span",
                  "text": "sfMusic_play to do so).\n"
                },
                {
                  "kind": "span",
                  "text": "Here is a complete list of all the supported audio formats:\n"
                },
                {
                  "kind": "span",
                  "text": "ogg, wav, flac, aiff, au, raw, paf, svx, nist, voc, ircam,\n"
                },
                {
                  "kind": "span",
                  "text": "w64, mat4, mat5 pvf, htk, sds, avr, sd2, caf, wve, mpc2k, rf64.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "data",
              "line": 59,
              "column": 39,
              "type": {
                "label": "Address"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Pointer to the file data in memory\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "sizeInBytes",
              "line": 59,
              "column": 71,
              "type": {
                "label": "Sf.sfSize_t",
                "docHref": "docs/sf.html#L123C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Size of the data to load, in bytes\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "A new sfMusic object (NULL if failed)\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_createFromStream",
          "line": 75,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 75,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_createFromStream",
                      "href": "docs/sf.audio.music.html#L75C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "stream",
                      "href": "docs/sf.audio.music.html#L75C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "access"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.System.InputStream.sfInputStream",
                      "href": "docs/sf.system.inputstream.html#L50C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 76,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Create a new music and load it from a custom stream\n"
                },
                {
                  "kind": "span",
                  "text": "This function doesn't start playing the music (call\n"
                },
                {
                  "kind": "span",
                  "text": "sfMusic_play to do so).\n"
                },
                {
                  "kind": "span",
                  "text": "Here is a complete list of all the supported audio formats:\n"
                },
                {
                  "kind": "span",
                  "text": "ogg, wav, flac, aiff, au, raw, paf, svx, nist, voc, ircam,\n"
                },
                {
                  "kind": "span",
                  "text": "w64, mat4, mat5 pvf, htk, sds, avr, sd2, caf, wve, mpc2k, rf64.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "stream",
              "line": 75,
              "column": 39,
              "type": {
                "label": ""
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Source stream to read from\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "A new sfMusic object (NULL if failed)\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_destroy",
          "line": 84,
          "column": 14,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 84,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_destroy",
                      "href": "docs/sf.audio.music.html#L84C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L84C31"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Destroy a music\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 84,
              "column": 31,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music to destroy\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfMusic_setLoop",
          "line": 98,
          "column": 14,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 98,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_setLoop",
                      "href": "docs/sf.audio.music.html#L98C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L98C31"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "inLoop",
                      "href": "docs/sf.audio.music.html#L98C52"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfBool",
                      "href": "docs/sf.html#L67C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Set whether or not a music should loop after reaching the end\n"
                },
                {
                  "kind": "span",
                  "text": "If set, the music will restart from beginning after\n"
                },
                {
                  "kind": "span",
                  "text": "reaching the end and so on, until it is stopped or\n"
                },
                {
                  "kind": "span",
                  "text": "sfMusic_setLoop(music, sfFalse) is called.\n"
                },
                {
                  "kind": "span",
                  "text": "The default looping state for musics is false.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 98,
              "column": 31,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "inLoop",
              "line": 98,
              "column": 52,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf.html#L67C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTrue to play in loop, sfFalse to play once\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfMusic_getLoop",
          "line": 108,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 108,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_getLoop",
                      "href": "docs/sf.audio.music.html#L108C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L108C30"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfBool",
                      "href": "docs/sf.html#L67C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Tell whether or not a music is in loop mode\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 108,
              "column": 30,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "sfTrue if the music is looping, sfFalse otherwise\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_getDuration",
          "line": 118,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 118,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_getDuration",
                      "href": "docs/sf.audio.music.html#L118C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L118C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.System.Time.sfTime",
                      "href": "docs/sf.system.time.html#L28C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Get the total duration of a music\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 118,
              "column": 34,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Music duration\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_play",
          "line": 132,
          "column": 14,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 132,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_play",
                      "href": "docs/sf.audio.music.html#L132C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L132C28"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Start or resume playing a music\n"
                },
                {
                  "kind": "span",
                  "text": "This function starts the music if it was stopped, resumes\n"
                },
                {
                  "kind": "span",
                  "text": "it if it was paused, and restarts it from beginning if it\n"
                },
                {
                  "kind": "span",
                  "text": "was it already playing.\n"
                },
                {
                  "kind": "span",
                  "text": "This function uses its own thread so that it doesn't block\n"
                },
                {
                  "kind": "span",
                  "text": "the rest of the program while the music is played.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 132,
              "column": 28,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfMusic_pause",
          "line": 143,
          "column": 14,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 143,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_pause",
                      "href": "docs/sf.audio.music.html#L143C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L143C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Pause a music\n"
                },
                {
                  "kind": "span",
                  "text": "This function pauses the music if it was playing,\n"
                },
                {
                  "kind": "span",
                  "text": "otherwise (music already paused or stopped) it has no effect.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 143,
              "column": 29,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfMusic_stop",
          "line": 155,
          "column": 14,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 155,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_stop",
                      "href": "docs/sf.audio.music.html#L155C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L155C28"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Stop playing a music\n"
                },
                {
                  "kind": "span",
                  "text": "This function stops the music if it was playing or paused,\n"
                },
                {
                  "kind": "span",
                  "text": "and does nothing if it was already stopped.\n"
                },
                {
                  "kind": "span",
                  "text": "It also resets the playing position (unlike sfMusic_pause).\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 155,
              "column": 28,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfMusic_getChannelCount",
          "line": 167,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 167,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_getChannelCount",
                      "href": "docs/sf.audio.music.html#L167C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L167C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfUint32",
                      "href": "docs/sf.html#L107C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Return the number of channels of a music\n"
                },
                {
                  "kind": "span",
                  "text": "1 channel means a mono sound, 2 means stereo, etc.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 167,
              "column": 38,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Number of channels\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_getSampleRate",
          "line": 180,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 180,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_getSampleRate",
                      "href": "docs/sf.audio.music.html#L180C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L180C36"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfUint32",
                      "href": "docs/sf.html#L107C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Get the sample rate of a music\n"
                },
                {
                  "kind": "span",
                  "text": "The sample rate is the number of audio samples played per\n"
                },
                {
                  "kind": "span",
                  "text": "second. The higher, the better the quality.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 180,
              "column": 36,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Sample rate, in number of samples per second\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_getStatus",
          "line": 190,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 190,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_getStatus",
                      "href": "docs/sf.audio.music.html#L190C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L190C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Audio.SoundStatus.sfSoundStatus",
                      "href": "docs/sf.audio.soundstatus.html#L20C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Get the current status of a music (stopped, paused, playing)\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 190,
              "column": 32,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Current status\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_getPlayingOffset",
          "line": 200,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 200,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_getPlayingOffset",
                      "href": "docs/sf.audio.music.html#L200C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L200C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.System.Time.sfTime",
                      "href": "docs/sf.system.time.html#L28C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Get the current playing position of a music\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 200,
              "column": 39,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Current playing position\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_setPitch",
          "line": 215,
          "column": 14,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 215,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_setPitch",
                      "href": "docs/sf.audio.music.html#L215C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L215C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "pitch",
                      "href": "docs/sf.audio.music.html#L215C53"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "float"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Set the pitch of a music\n"
                },
                {
                  "kind": "span",
                  "text": "The pitch represents the perceived fundamental frequency\n"
                },
                {
                  "kind": "span",
                  "text": "of a sound; thus you can make a music more acute or grave\n"
                },
                {
                  "kind": "span",
                  "text": "by changing its pitch. A side effect of changing the pitch\n"
                },
                {
                  "kind": "span",
                  "text": "is to modify the playing speed of the music as well.\n"
                },
                {
                  "kind": "span",
                  "text": "The default value for the pitch is 1.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 215,
              "column": 32,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "pitch",
              "line": 215,
              "column": 53,
              "type": {
                "label": "Float"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New pitch to apply to the music\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfMusic_setVolume",
          "line": 227,
          "column": 14,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 227,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_setVolume",
                      "href": "docs/sf.audio.music.html#L227C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L227C33"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "volume",
                      "href": "docs/sf.audio.music.html#L227C54"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "float"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Set the volume of a music\n"
                },
                {
                  "kind": "span",
                  "text": "The volume is a value between 0 (mute) and 100 (full volume).\n"
                },
                {
                  "kind": "span",
                  "text": "The default value for the volume is 100.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 227,
              "column": 33,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "volume",
              "line": 227,
              "column": 54,
              "type": {
                "label": "Float"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Volume of the music\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfMusic_setPosition",
          "line": 239,
          "column": 14,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 239,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_setPosition",
                      "href": "docs/sf.audio.music.html#L239C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L239C35"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "position",
                      "href": "docs/sf.audio.music.html#L239C56"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.System.Vector3.sfVector3f",
                      "href": "docs/sf.system.vector3.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Set the 3D position of a music in the audio scene\n"
                },
                {
                  "kind": "span",
                  "text": "Only musics with one channel (mono musics) can be\n"
                },
                {
                  "kind": "span",
                  "text": "spatialized.\n"
                },
                {
                  "kind": "span",
                  "text": "The default position of a music is (0, 0, 0).\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 239,
              "column": 35,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "position",
              "line": 239,
              "column": 56,
              "type": {
                "label": "Sf.System.Vector3.sfVector3f",
                "docHref": "docs/sf.system.vector3.html#L33C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Position of the music in the scene\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfMusic_setRelativeToListener",
          "line": 254,
          "column": 14,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 254,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_setRelativeToListener",
                      "href": "docs/sf.audio.music.html#L254C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L254C45"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "relative",
                      "href": "docs/sf.audio.music.html#L254C66"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfBool",
                      "href": "docs/sf.html#L67C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Make a musics's position relative to the listener or absolute\n"
                },
                {
                  "kind": "span",
                  "text": "Making a music relative to the listener will ensure that it will always\n"
                },
                {
                  "kind": "span",
                  "text": "be played the same way regardless the position of the listener.\n"
                },
                {
                  "kind": "span",
                  "text": "This can be useful for non-spatialized musics, musics that are\n"
                },
                {
                  "kind": "span",
                  "text": "produced by the listener, or musics attached to it.\n"
                },
                {
                  "kind": "span",
                  "text": "The default value is false (position is absolute).\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 254,
              "column": 45,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "relative",
              "line": 254,
              "column": 66,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf.html#L67C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTrue to set the position relative, sfFalse to set it absolute\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfMusic_setMinDistance",
          "line": 270,
          "column": 14,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 270,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_setMinDistance",
                      "href": "docs/sf.audio.music.html#L270C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L270C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "distance",
                      "href": "docs/sf.audio.music.html#L270C59"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "float"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Set the minimum distance of a music\n"
                },
                {
                  "kind": "span",
                  "text": "The \"minimum distance\" of a music is the maximum\n"
                },
                {
                  "kind": "span",
                  "text": "distance at which it is heard at its maximum volume. Further\n"
                },
                {
                  "kind": "span",
                  "text": "than the minimum distance, it will start to fade out according\n"
                },
                {
                  "kind": "span",
                  "text": "to its attenuation factor. A value of 0 (\"inside the head\n"
                },
                {
                  "kind": "span",
                  "text": "of the listener\") is an invalid value and is forbidden.\n"
                },
                {
                  "kind": "span",
                  "text": "The default value of the minimum distance is 1.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 270,
              "column": 38,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "distance",
              "line": 270,
              "column": 59,
              "type": {
                "label": "Float"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New minimum distance of the music\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfMusic_setAttenuation",
          "line": 288,
          "column": 14,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 288,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_setAttenuation",
                      "href": "docs/sf.audio.music.html#L288C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L288C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "attenuation",
                      "href": "docs/sf.audio.music.html#L288C59"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "float"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Set the attenuation factor of a music\n"
                },
                {
                  "kind": "span",
                  "text": "The attenuation is a multiplicative factor which makes\n"
                },
                {
                  "kind": "span",
                  "text": "the music more or less loud according to its distance\n"
                },
                {
                  "kind": "span",
                  "text": "from the listener. An attenuation of 0 will produce a\n"
                },
                {
                  "kind": "span",
                  "text": "non-attenuated music, i.e. its volume will always be the same\n"
                },
                {
                  "kind": "span",
                  "text": "whether it is heard from near or from far. On the other hand,\n"
                },
                {
                  "kind": "span",
                  "text": "an attenuation value such as 100 will make the music fade out\n"
                },
                {
                  "kind": "span",
                  "text": "very quickly as it gets further from the listener.\n"
                },
                {
                  "kind": "span",
                  "text": "The default value of the attenuation is 1.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 288,
              "column": 38,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "attenuation",
              "line": 288,
              "column": 59,
              "type": {
                "label": "Float"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New attenuation factor of the music\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfMusic_setPlayingOffset",
          "line": 300,
          "column": 14,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 300,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_setPlayingOffset",
                      "href": "docs/sf.audio.music.html#L300C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L300C40"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "timeOffset",
                      "href": "docs/sf.audio.music.html#L300C61"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.System.Time.sfTime",
                      "href": "docs/sf.system.time.html#L28C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Change the current playing position of a music\n"
                },
                {
                  "kind": "span",
                  "text": "The playing position can be changed when the music is\n"
                },
                {
                  "kind": "span",
                  "text": "either paused or playing.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 300,
              "column": 40,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "timeOffset",
              "line": 300,
              "column": 61,
              "type": {
                "label": "Sf.System.Time.sfTime",
                "docHref": "docs/sf.system.time.html#L28C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New playing position\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfMusic_getPitch",
          "line": 310,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 310,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_getPitch",
                      "href": "docs/sf.audio.music.html#L310C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L310C31"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "float"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Get the pitch of a music\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 310,
              "column": 31,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Pitch of the music\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_getVolume",
          "line": 320,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 320,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_getVolume",
                      "href": "docs/sf.audio.music.html#L320C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L320C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "float"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Get the volume of a music\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 320,
              "column": 32,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Volume of the music, in the range [0, 100]\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_getPosition",
          "line": 330,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 330,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_getPosition",
                      "href": "docs/sf.audio.music.html#L330C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L330C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.System.Vector3.sfVector3f",
                      "href": "docs/sf.system.vector3.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Get the 3D position of a music in the audio scene\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 330,
              "column": 34,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Position of the music in the world\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_isRelativeToListener",
          "line": 341,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 341,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_isRelativeToListener",
                      "href": "docs/sf.audio.music.html#L341C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L341C43"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfBool",
                      "href": "docs/sf.html#L67C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Tell whether a music's position is relative to the\n"
                }
              ]
            },
            {
              "kind": "code",
              "children": [
                {
                  "number": 1,
                  "children": [
                    {
                      "kind": "span",
                      "text": "listener or is absolute"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 341,
              "column": 43,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "sfTrue if the position is relative, sfFalse if it's absolute\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_getMinDistance",
          "line": 351,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 351,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_getMinDistance",
                      "href": "docs/sf.audio.music.html#L351C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L351C37"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "float"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Get the minimum distance of a music\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 351,
              "column": 37,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Minimum distance of the music\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfMusic_getAttenuation",
          "line": 361,
          "column": 13,
          "src": "srcs/sf-audio-music.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 361,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_getAttenuation",
                      "href": "docs/sf.audio.music.html#L361C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "music",
                      "href": "docs/sf.audio.music.html#L361C37"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfMusic_Ptr",
                      "href": "docs/sf.audio.html#L35C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "float"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Get the attenuation factor of a music\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "music",
              "line": 361,
              "column": 37,
              "type": {
                "label": "Sf.Audio.sfMusic_Ptr",
                "docHref": "docs/sf.audio.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Music object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Attenuation factor of the music\n"
                  }
                ]
              }
            ]
          }
        }
      ],
      "label": "Subprograms"
    }
  ]
};