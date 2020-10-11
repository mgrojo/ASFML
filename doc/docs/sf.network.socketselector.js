GNATdoc.Documentation = {
  "label": "Sf.Network.SocketSelector",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "sfSocketSelector_create",
          "line": 32,
          "column": 13,
          "src": "srcs/sf-network-socketselector.ads.html",
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
                      "text": "sfSocketSelector_create",
                      "href": "docs/sf.network.socketselector.html#L32C13"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                  "text": "Create a new selector\n"
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
                    "text": "A new sfSocketSelector object\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfSocketSelector_copy",
          "line": 42,
          "column": 13,
          "src": "srcs/sf-network-socketselector.ads.html",
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
                      "text": "sfSocketSelector_copy",
                      "href": "docs/sf.network.socketselector.html#L42C13"
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
                      "text": "selector",
                      "href": "docs/sf.network.socketselector.html#L42C36"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                  "text": "Create a new socket selector by copying an existing one\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "selector",
              "line": 42,
              "column": 36,
              "type": {
                "label": "Sf.Network.Types.sfSocketSelector_Ptr",
                "docHref": "docs/sf.network.types.html#L44C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Socket selector to copy\n"
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
                    "text": "A new sfSocketSelector object which is a copy of @a selector\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfSocketSelector_destroy",
          "line": 50,
          "column": 14,
          "src": "srcs/sf-network-socketselector.ads.html",
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
                      "text": "sfSocketSelector_destroy",
                      "href": "docs/sf.network.socketselector.html#L50C14"
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
                      "text": "selector",
                      "href": "docs/sf.network.socketselector.html#L50C40"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                  "text": "Destroy a socket selector\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "selector",
              "line": 50,
              "column": 40,
              "type": {
                "label": "Sf.Network.Types.sfSocketSelector_Ptr",
                "docHref": "docs/sf.network.types.html#L44C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Socket selector to destroy\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfSocketSelector_addTcpListener",
          "line": 63,
          "column": 14,
          "src": "srcs/sf-network-socketselector.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 63,
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
                      "text": "sfSocketSelector_addTcpListener",
                      "href": "docs/sf.network.socketselector.html#L63C14"
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
                      "text": "selector",
                      "href": "docs/sf.network.socketselector.html#L63C47"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                      "text": "socket",
                      "href": "docs/sf.network.socketselector.html#L63C80"
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
                      "text": "sfTcpListener_Ptr",
                      "href": "docs/sf.network.types.html#L46C9"
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
                  "text": "Add a new socket to a socket selector\n"
                },
                {
                  "kind": "span",
                  "text": "This function keeps a weak pointer to the socket,\n"
                },
                {
                  "kind": "span",
                  "text": "so you have to make sure that the socket is not destroyed\n"
                },
                {
                  "kind": "span",
                  "text": "while it is stored in the selector.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "selector",
              "line": 63,
              "column": 47,
              "type": {
                "label": "Sf.Network.Types.sfSocketSelector_Ptr",
                "docHref": "docs/sf.network.types.html#L44C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Socket selector object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "socket",
              "line": 63,
              "column": 80,
              "type": {
                "label": "Sf.Network.Types.sfTcpListener_Ptr",
                "docHref": "docs/sf.network.types.html#L46C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Pointer to the socket to add\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfSocketSelector_addTcpSocket",
          "line": 65,
          "column": 14,
          "src": "srcs/sf-network-socketselector.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 65,
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
                      "text": "sfSocketSelector_addTcpSocket",
                      "href": "docs/sf.network.socketselector.html#L65C14"
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
                      "text": "selector",
                      "href": "docs/sf.network.socketselector.html#L65C45"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                      "text": "socket",
                      "href": "docs/sf.network.socketselector.html#L65C78"
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
                      "text": "sfTcpSocket_Ptr",
                      "href": "docs/sf.network.types.html#L48C9"
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
            }
          ],
          "parameters": [
            {
              "label": "selector",
              "line": 65,
              "column": 45,
              "type": {
                "label": "Sf.Network.Types.sfSocketSelector_Ptr",
                "docHref": "docs/sf.network.types.html#L44C9"
              },
              "description": [
              ]
            },
            {
              "label": "socket",
              "line": 65,
              "column": 78,
              "type": {
                "label": "Sf.Network.Types.sfTcpSocket_Ptr",
                "docHref": "docs/sf.network.types.html#L48C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "sfSocketSelector_addUdpSocket",
          "line": 67,
          "column": 14,
          "src": "srcs/sf-network-socketselector.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 67,
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
                      "text": "sfSocketSelector_addUdpSocket",
                      "href": "docs/sf.network.socketselector.html#L67C14"
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
                      "text": "selector",
                      "href": "docs/sf.network.socketselector.html#L67C45"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                      "text": "socket",
                      "href": "docs/sf.network.socketselector.html#L67C78"
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
                      "text": "sfUdpSocket_Ptr",
                      "href": "docs/sf.network.types.html#L50C9"
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
            }
          ],
          "parameters": [
            {
              "label": "selector",
              "line": 67,
              "column": 45,
              "type": {
                "label": "Sf.Network.Types.sfSocketSelector_Ptr",
                "docHref": "docs/sf.network.types.html#L44C9"
              },
              "description": [
              ]
            },
            {
              "label": "socket",
              "line": 67,
              "column": 78,
              "type": {
                "label": "Sf.Network.Types.sfUdpSocket_Ptr",
                "docHref": "docs/sf.network.types.html#L50C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "sfSocketSelector_removeTcpListener",
          "line": 79,
          "column": 14,
          "src": "srcs/sf-network-socketselector.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 79,
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
                      "text": "sfSocketSelector_removeTcpListener",
                      "href": "docs/sf.network.socketselector.html#L79C14"
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
                      "text": "selector",
                      "href": "docs/sf.network.socketselector.html#L79C50"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                      "text": "socket",
                      "href": "docs/sf.network.socketselector.html#L79C83"
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
                      "text": "sfTcpListener_Ptr",
                      "href": "docs/sf.network.types.html#L46C9"
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
                  "text": "Remove a socket from a socket selector\n"
                },
                {
                  "kind": "span",
                  "text": "This function doesn't destroy the socket, it simply\n"
                },
                {
                  "kind": "span",
                  "text": "removes the pointer that the selector has to it.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "selector",
              "line": 79,
              "column": 50,
              "type": {
                "label": "Sf.Network.Types.sfSocketSelector_Ptr",
                "docHref": "docs/sf.network.types.html#L44C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Socket selector object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "socket",
              "line": 79,
              "column": 83,
              "type": {
                "label": "Sf.Network.Types.sfTcpListener_Ptr",
                "docHref": "docs/sf.network.types.html#L46C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "POointer to the socket to remove\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfSocketSelector_removeTcpSocket",
          "line": 81,
          "column": 14,
          "src": "srcs/sf-network-socketselector.ads.html",
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
                      "text": "sfSocketSelector_removeTcpSocket",
                      "href": "docs/sf.network.socketselector.html#L81C14"
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
                      "text": "selector",
                      "href": "docs/sf.network.socketselector.html#L81C48"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                      "text": "socket",
                      "href": "docs/sf.network.socketselector.html#L81C81"
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
                      "text": "sfTcpSocket_Ptr",
                      "href": "docs/sf.network.types.html#L48C9"
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
            }
          ],
          "parameters": [
            {
              "label": "selector",
              "line": 81,
              "column": 48,
              "type": {
                "label": "Sf.Network.Types.sfSocketSelector_Ptr",
                "docHref": "docs/sf.network.types.html#L44C9"
              },
              "description": [
              ]
            },
            {
              "label": "socket",
              "line": 81,
              "column": 81,
              "type": {
                "label": "Sf.Network.Types.sfTcpSocket_Ptr",
                "docHref": "docs/sf.network.types.html#L48C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "sfSocketSelector_removeUdpSocket",
          "line": 83,
          "column": 14,
          "src": "srcs/sf-network-socketselector.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 83,
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
                      "text": "sfSocketSelector_removeUdpSocket",
                      "href": "docs/sf.network.socketselector.html#L83C14"
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
                      "text": "selector",
                      "href": "docs/sf.network.socketselector.html#L83C48"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                      "text": "socket",
                      "href": "docs/sf.network.socketselector.html#L83C81"
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
                      "text": "sfUdpSocket_Ptr",
                      "href": "docs/sf.network.types.html#L50C9"
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
            }
          ],
          "parameters": [
            {
              "label": "selector",
              "line": 83,
              "column": 48,
              "type": {
                "label": "Sf.Network.Types.sfSocketSelector_Ptr",
                "docHref": "docs/sf.network.types.html#L44C9"
              },
              "description": [
              ]
            },
            {
              "label": "socket",
              "line": 83,
              "column": 81,
              "type": {
                "label": "Sf.Network.Types.sfUdpSocket_Ptr",
                "docHref": "docs/sf.network.types.html#L50C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "sfSocketSelector_clear",
          "line": 95,
          "column": 14,
          "src": "srcs/sf-network-socketselector.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 95,
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
                      "text": "sfSocketSelector_clear",
                      "href": "docs/sf.network.socketselector.html#L95C14"
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
                      "text": "selector",
                      "href": "docs/sf.network.socketselector.html#L95C38"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                  "text": "Remove all the sockets stored in a selector\n"
                },
                {
                  "kind": "span",
                  "text": "This function doesn't destroy any instance, it simply\n"
                },
                {
                  "kind": "span",
                  "text": "removes all the pointers that the selector has to\n"
                },
                {
                  "kind": "span",
                  "text": "external sockets.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "selector",
              "line": 95,
              "column": 38,
              "type": {
                "label": "Sf.Network.Types.sfSocketSelector_Ptr",
                "docHref": "docs/sf.network.types.html#L44C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Socket selector object\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfSocketSelector_wait",
          "line": 112,
          "column": 13,
          "src": "srcs/sf-network-socketselector.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 112,
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
                      "text": "sfSocketSelector_wait",
                      "href": "docs/sf.network.socketselector.html#L112C13"
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
                      "text": "selector",
                      "href": "docs/sf.network.socketselector.html#L112C36"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                      "text": "timeout",
                      "href": "docs/sf.network.socketselector.html#L112C69"
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
                      "href": "docs/sf.system.time.html#L29C9"
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
                      "text": "Sf.Config.sfBool",
                      "href": "docs/sf.config.html#L42C9"
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
                  "text": "Wait until one or more sockets are ready to receive\n"
                },
                {
                  "kind": "span",
                  "text": "This function returns as soon as at least one socket has\n"
                },
                {
                  "kind": "span",
                  "text": "some data available to be received. To know which sockets are\n"
                },
                {
                  "kind": "span",
                  "text": "ready, use the sfSocketSelector_isXxxReady functions.\n"
                },
                {
                  "kind": "span",
                  "text": "If you use a timeout and no socket is ready before the timeout\n"
                },
                {
                  "kind": "span",
                  "text": "is over, the function returns sfFalse.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "selector",
              "line": 112,
              "column": 36,
              "type": {
                "label": "Sf.Network.Types.sfSocketSelector_Ptr",
                "docHref": "docs/sf.network.types.html#L44C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Socket selector object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "timeout",
              "line": 112,
              "column": 69,
              "type": {
                "label": "Sf.System.Time.sfTime",
                "docHref": "docs/sf.system.time.html#L29C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Maximum time to wait (use sfTimeZero for infinity)\n"
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
                    "text": "sfTrue if there are sockets ready, sfFalse otherwise\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfSocketSelector_isTcpListenerReady",
          "line": 130,
          "column": 13,
          "src": "srcs/sf-network-socketselector.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 130,
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
                      "text": "sfSocketSelector_isTcpListenerReady",
                      "href": "docs/sf.network.socketselector.html#L130C13"
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
                      "text": "selector",
                      "href": "docs/sf.network.socketselector.html#L130C50"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                      "text": "socket",
                      "href": "docs/sf.network.socketselector.html#L130C83"
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
                      "text": "sfTcpListener_Ptr",
                      "href": "docs/sf.network.types.html#L46C9"
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
                      "text": "Sf.Config.sfBool",
                      "href": "docs/sf.config.html#L42C9"
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
                  "text": "Test a socket to know if it is ready to receive data\n"
                },
                {
                  "kind": "span",
                  "text": "This function must be used after a call to\n"
                },
                {
                  "kind": "span",
                  "text": "sfSocketSelector_wait, to know which sockets are ready to\n"
                },
                {
                  "kind": "span",
                  "text": "receive data. If a socket is ready, a call to Receive will\n"
                },
                {
                  "kind": "span",
                  "text": "never block because we know that there is data available to read.\n"
                },
                {
                  "kind": "span",
                  "text": "Note that if this function returns sfTrue for a sfTcpListener,\n"
                },
                {
                  "kind": "span",
                  "text": "this means that it is ready to accept a new connection.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "selector",
              "line": 130,
              "column": 50,
              "type": {
                "label": "Sf.Network.Types.sfSocketSelector_Ptr",
                "docHref": "docs/sf.network.types.html#L44C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Socket selector object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "socket",
              "line": 130,
              "column": 83,
              "type": {
                "label": "Sf.Network.Types.sfTcpListener_Ptr",
                "docHref": "docs/sf.network.types.html#L46C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Socket to test\n"
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
                    "text": "sfTrue if the socket is ready to read, sfFalse otherwise\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfSocketSelector_isTcpSocketReady",
          "line": 132,
          "column": 13,
          "src": "srcs/sf-network-socketselector.ads.html",
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
                      "text": "sfSocketSelector_isTcpSocketReady",
                      "href": "docs/sf.network.socketselector.html#L132C13"
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
                      "text": "selector",
                      "href": "docs/sf.network.socketselector.html#L132C48"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                      "text": "socket",
                      "href": "docs/sf.network.socketselector.html#L132C81"
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
                      "text": "sfTcpSocket_Ptr",
                      "href": "docs/sf.network.types.html#L48C9"
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
                      "text": "Sf.Config.sfBool",
                      "href": "docs/sf.config.html#L42C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "selector",
              "line": 132,
              "column": 48,
              "type": {
                "label": "Sf.Network.Types.sfSocketSelector_Ptr",
                "docHref": "docs/sf.network.types.html#L44C9"
              },
              "description": [
              ]
            },
            {
              "label": "socket",
              "line": 132,
              "column": 81,
              "type": {
                "label": "Sf.Network.Types.sfTcpSocket_Ptr",
                "docHref": "docs/sf.network.types.html#L48C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "sfSocketSelector_isUdpSocketReady",
          "line": 134,
          "column": 13,
          "src": "srcs/sf-network-socketselector.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 134,
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
                      "text": "sfSocketSelector_isUdpSocketReady",
                      "href": "docs/sf.network.socketselector.html#L134C13"
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
                      "text": "selector",
                      "href": "docs/sf.network.socketselector.html#L134C48"
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
                      "text": "sfSocketSelector_Ptr",
                      "href": "docs/sf.network.types.html#L44C9"
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
                      "text": "socket",
                      "href": "docs/sf.network.socketselector.html#L134C81"
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
                      "text": "sfTcpSocket_Ptr",
                      "href": "docs/sf.network.types.html#L48C9"
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
                      "text": "Sf.Config.sfBool",
                      "href": "docs/sf.config.html#L42C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "selector",
              "line": 134,
              "column": 48,
              "type": {
                "label": "Sf.Network.Types.sfSocketSelector_Ptr",
                "docHref": "docs/sf.network.types.html#L44C9"
              },
              "description": [
              ]
            },
            {
              "label": "socket",
              "line": 134,
              "column": 81,
              "type": {
                "label": "Sf.Network.Types.sfTcpSocket_Ptr",
                "docHref": "docs/sf.network.types.html#L48C9"
              },
              "description": [
              ]
            }
          ]
        }
      ],
      "label": "Subprograms"
    }
  ]
};