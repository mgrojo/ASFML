GNATdoc.Documentation = {
  "label": "Sf.Audio.Listener",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "getDirection",
          "qualifier": "",
          "line": 81,
          "column": 13,
          "src": "srcs/sf-audio-listener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 81,
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
                      "text": "getDirection",
                      "href": "docs/sf__audio__listener___spec.html#L81C13"
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
                      "href": "docs/sf__system__vector3___spec.html#L32C9"
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
                  "text": " Get the current forward vector of the listener in the scene\n"
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
                    "text": "Listener's forward vector (not normalized)\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getGlobalVolume",
          "qualifier": "",
          "line": 40,
          "column": 13,
          "src": "srcs/sf-audio-listener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 40,
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
                      "text": "getGlobalVolume",
                      "href": "docs/sf__audio__listener___spec.html#L40C13"
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
                  "text": " Get the current value of the global volume\n"
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
                    "text": "Current global volume, in the range [0, 100]\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getPosition",
          "qualifier": "",
          "line": 58,
          "column": 13,
          "src": "srcs/sf-audio-listener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 58,
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
                      "text": "getPosition",
                      "href": "docs/sf__audio__listener___spec.html#L58C13"
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
                      "href": "docs/sf__system__vector3___spec.html#L32C9"
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
                  "text": " Get the current position of the listener in the scene\n"
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
                    "text": "The listener's position\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getUpVector",
          "qualifier": "",
          "line": 104,
          "column": 13,
          "src": "srcs/sf-audio-listener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 104,
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
                      "text": "getUpVector",
                      "href": "docs/sf__audio__listener___spec.html#L104C13"
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
                      "href": "docs/sf__system__vector3___spec.html#L32C9"
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
                  "text": " Get the current upward vector of the listener in the scene\n"
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
                    "text": "Listener's upward vector (not normalized)\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "setDirection",
          "qualifier": "",
          "line": 73,
          "column": 14,
          "src": "srcs/sf-audio-listener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 73,
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
                      "text": "setDirection",
                      "href": "docs/sf__audio__listener___spec.html#L73C14"
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
                      "text": "direction",
                      "href": "docs/sf__audio__listener___spec.html#L73C28"
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
                      "href": "docs/sf__system__vector3___spec.html#L32C9"
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
                  "text": " Set the orientation of the forward vector in the scene\n"
                },
                {
                  "kind": "span",
                  "text": "The direction (also called \"at vector\") is the vector\n"
                },
                {
                  "kind": "span",
                  "text": "pointing forward from the listener's perspective. Together\n"
                },
                {
                  "kind": "span",
                  "text": "with the up vector, it defines the 3D orientation of the\n"
                },
                {
                  "kind": "span",
                  "text": "listener in the scene. The direction vector doesn't\n"
                },
                {
                  "kind": "span",
                  "text": "have to be normalized.\n"
                },
                {
                  "kind": "span",
                  "text": "The default listener's direction is (0, 0, -1).\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "direction",
              "line": 73,
              "column": 28,
              "type": {
                "label": "Sf.System.Vector3.sfVector3f",
                "docHref": "docs/sf__system__vector3___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New listener's direction\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setGlobalVolume",
          "qualifier": "",
          "line": 32,
          "column": 14,
          "src": "srcs/sf-audio-listener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 32,
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
                      "text": "setGlobalVolume",
                      "href": "docs/sf__audio__listener___spec.html#L32C14"
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
                      "text": "volume",
                      "href": "docs/sf__audio__listener___spec.html#L32C31"
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
                  "text": " Change the global volume of all the sounds and musics\n"
                },
                {
                  "kind": "span",
                  "text": "The volume is a number between 0 and 100; it is combined with\n"
                },
                {
                  "kind": "span",
                  "text": "the individual volume of each sound / music.\n"
                },
                {
                  "kind": "span",
                  "text": "The default value for the volume is 100 (maximum).\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "volume",
              "line": 32,
              "column": 31,
              "type": {
                "label": "Float"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New global volume, in the range [0, 100]\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setPosition",
          "qualifier": "",
          "line": 50,
          "column": 14,
          "src": "srcs/sf-audio-listener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 50,
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
                      "text": "setPosition",
                      "href": "docs/sf__audio__listener___spec.html#L50C14"
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
                      "text": "position",
                      "href": "docs/sf__audio__listener___spec.html#L50C27"
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
                      "href": "docs/sf__system__vector3___spec.html#L32C9"
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
                  "text": " Set the position of the listener in the scene\n"
                },
                {
                  "kind": "span",
                  "text": "The default listener's position is (0, 0, 0).\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "position",
              "line": 50,
              "column": 27,
              "type": {
                "label": "Sf.System.Vector3.sfVector3f",
                "docHref": "docs/sf__system__vector3___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New position of the listener\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setUpVector",
          "qualifier": "",
          "line": 96,
          "column": 14,
          "src": "srcs/sf-audio-listener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 96,
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
                      "text": "setUpVector",
                      "href": "docs/sf__audio__listener___spec.html#L96C14"
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
                      "text": "upVector",
                      "href": "docs/sf__audio__listener___spec.html#L96C27"
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
                      "href": "docs/sf__system__vector3___spec.html#L32C9"
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
                  "text": " Set the upward vector of the listener in the scene\n"
                },
                {
                  "kind": "span",
                  "text": "The up vector is the vector that points upward from the\n"
                },
                {
                  "kind": "span",
                  "text": "listener's perspective. Together with the direction, it\n"
                },
                {
                  "kind": "span",
                  "text": "defines the 3D orientation of the listener in the scene.\n"
                },
                {
                  "kind": "span",
                  "text": "The up vector doesn't have to be normalized.\n"
                },
                {
                  "kind": "span",
                  "text": "The default listener's up vector is (0, 1, 0). It is usually\n"
                },
                {
                  "kind": "span",
                  "text": "not necessary to change it, especially in 2D scenarios.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "upVector",
              "line": 96,
              "column": 27,
              "type": {
                "label": "Sf.System.Vector3.sfVector3f",
                "docHref": "docs/sf__system__vector3___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New listener's up vector\n"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "label": "Subprograms"
    }
  ]
};