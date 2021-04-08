GNATdoc.Documentation = {
  "label": "Sf.Network.UdpSocket",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "bind",
          "qualifier": "",
          "line": 107,
          "column": 13,
          "src": "srcs/sf-network-udpsocket.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 107,
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
                      "text": "bind",
                      "href": "docs/sf__network__udpsocket___spec.html#L107C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 108,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "socket",
                      "href": "docs/sf__network__udpsocket___spec.html#L108C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "  "
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
                      "href": "docs/sf__network___spec.html#L52C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 109,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "port",
                      "href": "docs/sf__network__udpsocket___spec.html#L109C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "text": "sfUint16",
                      "href": "docs/sf___spec.html#L97C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 110,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "address",
                      "href": "docs/sf__network__udpsocket___spec.html#L110C7"
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
                      "text": "Sf.Network.IpAddress.sfIpAddress",
                      "href": "docs/sf__network__ipaddress___spec.html#L36C9"
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
                      "text": "Sf.Network.SocketStatus.sfSocketStatus",
                      "href": "docs/sf__network__socketstatus___spec.html#L34C9"
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
                  "text": " Bind a UDP socket to a specific port\n"
                },
                {
                  "kind": "span",
                  "text": "Binding the socket to a port is necessary for being\n"
                },
                {
                  "kind": "span",
                  "text": "able to receive data on that port.\n"
                },
                {
                  "kind": "span",
                  "text": "You can use the special value 0 to tell the\n"
                },
                {
                  "kind": "span",
                  "text": "system to automatically pick an available port, and then\n"
                },
                {
                  "kind": "span",
                  "text": "call sfUdpSocket_getLocalPort to retrieve the chosen port.\n"
                },
                {
                  "kind": "span",
                  "text": "If there is no specific address to listen to, pass sfIpAddress_Any\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "socket",
              "line": 108,
              "column": 7,
              "type": {
                "label": "Sf.Network.sfUdpSocket_Ptr",
                "docHref": "docs/sf__network___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "UDP socket object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "port",
              "line": 109,
              "column": 7,
              "type": {
                "label": "Sf.sfUint16",
                "docHref": "docs/sf___spec.html#L97C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Port to bind the socket to\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "address",
              "line": 110,
              "column": 7,
              "type": {
                "label": "Sf.Network.IpAddress.sfIpAddress",
                "docHref": "docs/sf__network__ipaddress___spec.html#L36C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Address of the interface to bind to\n"
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
                    "text": "Status code\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "create",
          "qualifier": "",
          "line": 38,
          "column": 13,
          "src": "srcs/sf-network-udpsocket.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 38,
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
                      "text": "create",
                      "href": "docs/sf__network__udpsocket___spec.html#L38C13"
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
                      "text": "sfUdpSocket_Ptr",
                      "href": "docs/sf__network___spec.html#L52C9"
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
                  "text": " Create a new UDP socket\n"
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
                    "text": "A new sfUdpSocket object\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "destroy",
          "qualifier": "",
          "line": 46,
          "column": 14,
          "src": "srcs/sf-network-udpsocket.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 46,
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
                      "text": "destroy",
                      "href": "docs/sf__network__udpsocket___spec.html#L46C14"
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
                      "text": "socket",
                      "href": "docs/sf__network__udpsocket___spec.html#L46C23"
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
                      "href": "docs/sf__network___spec.html#L52C9"
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
                  "text": " Destroy a UDP socket\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "socket",
              "line": 46,
              "column": 23,
              "type": {
                "label": "Sf.Network.sfUdpSocket_Ptr",
                "docHref": "docs/sf__network___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "UDP socket to destroy\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "getLocalPort",
          "qualifier": "",
          "line": 87,
          "column": 13,
          "src": "srcs/sf-network-udpsocket.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 87,
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
                      "text": "getLocalPort",
                      "href": "docs/sf__network__udpsocket___spec.html#L87C13"
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
                      "text": "socket",
                      "href": "docs/sf__network__udpsocket___spec.html#L87C27"
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
                      "href": "docs/sf__network___spec.html#L52C9"
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
                      "text": "sfUint16",
                      "href": "docs/sf___spec.html#L97C9"
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
                  "text": " Get the port to which a UDP socket is bound locally\n"
                },
                {
                  "kind": "span",
                  "text": "If the socket is not bound to a port, this function\n"
                },
                {
                  "kind": "span",
                  "text": "returns 0.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "socket",
              "line": 87,
              "column": 27,
              "type": {
                "label": "Sf.Network.sfUdpSocket_Ptr",
                "docHref": "docs/sf__network___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "UDP socket object\n"
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
                    "text": "Port to which the socket is bound\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "isBlocking",
          "qualifier": "",
          "line": 74,
          "column": 13,
          "src": "srcs/sf-network-udpsocket.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 74,
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
                      "text": "isBlocking",
                      "href": "docs/sf__network__udpsocket___spec.html#L74C13"
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
                      "text": "socket",
                      "href": "docs/sf__network__udpsocket___spec.html#L74C25"
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
                      "href": "docs/sf__network___spec.html#L52C9"
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
                      "href": "docs/sf___spec.html#L68C9"
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
                  "text": " Tell whether a UDP socket is in blocking or non-blocking mode\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "socket",
              "line": 74,
              "column": 25,
              "type": {
                "label": "Sf.Network.sfUdpSocket_Ptr",
                "docHref": "docs/sf__network___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "UDP socket object\n"
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
                    "text": "sfTrue if the socket is blocking, sfFalse otherwise\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "maxDatagramSize",
          "qualifier": "",
          "line": 222,
          "column": 13,
          "src": "srcs/sf-network-udpsocket.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 222,
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
                      "text": "maxDatagramSize",
                      "href": "docs/sf__network__udpsocket___spec.html#L222C13"
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
                      "href": "docs/sf___spec.html#L108C9"
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
                  "text": " Return the maximum number of bytes that can be\n"
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
                      "text": "sent in a single UDP datagram"
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
                    "text": "The maximum size of a UDP datagram (message)\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "receive",
          "qualifier": "",
          "line": 167,
          "column": 13,
          "src": "srcs/sf-network-udpsocket.ads.html",
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
                      "text": "receive",
                      "href": "docs/sf__network__udpsocket___spec.html#L167C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 168,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "socket",
                      "href": "docs/sf__network__udpsocket___spec.html#L168C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
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
                      "href": "docs/sf__network___spec.html#L52C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 169,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "data",
                      "href": "docs/sf__network__udpsocket___spec.html#L169C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "          "
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
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 170,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "size",
                      "href": "docs/sf__network__udpsocket___spec.html#L170C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "          "
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
                      "href": "docs/sf___spec.html#L124C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 171,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "received",
                      "href": "docs/sf__network__udpsocket___spec.html#L171C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "sfSize_t",
                      "href": "docs/sf___spec.html#L124C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 172,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "remoteAddress",
                      "href": "docs/sf__network__udpsocket___spec.html#L172C7"
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
                      "text": "Sf.Network.IpAddress.sfIpAddress",
                      "href": "docs/sf__network__ipaddress___spec.html#L36C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 173,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "remotePort",
                      "href": "docs/sf__network__udpsocket___spec.html#L173C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "text": "sfUint16",
                      "href": "docs/sf___spec.html#L97C9"
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
                      "text": "Sf.Network.SocketStatus.sfSocketStatus",
                      "href": "docs/sf__network__socketstatus___spec.html#L34C9"
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
                  "text": " Receive raw data from a remote peer with a UDP socket\n"
                },
                {
                  "kind": "span",
                  "text": "In blocking mode, this function will wait until some\n"
                },
                {
                  "kind": "span",
                  "text": "bytes are actually received.\n"
                },
                {
                  "kind": "span",
                  "text": "Be careful to use a buffer which is large enough for\n"
                },
                {
                  "kind": "span",
                  "text": "the data that you intend to receive, if it is too small\n"
                },
                {
                  "kind": "span",
                  "text": "then an error will be returned and *all* the data will\n"
                },
                {
                  "kind": "span",
                  "text": "be lost.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "socket",
              "line": 168,
              "column": 7,
              "type": {
                "label": "Sf.Network.sfUdpSocket_Ptr",
                "docHref": "docs/sf__network___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "UDP socket object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "data",
              "line": 169,
              "column": 7,
              "type": {
                "label": "Address"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Pointer to the array to fill with the received bytes\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "size",
              "line": 170,
              "column": 7,
              "type": {
                "label": "Sf.sfSize_t",
                "docHref": "docs/sf___spec.html#L124C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Maximum number of bytes that can be received\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "received",
              "line": 171,
              "column": 7,
              "type": {
                "label": ""
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "This variable is filled with the actual number of bytes received\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "remoteAddress",
              "line": 172,
              "column": 7,
              "type": {
                "label": ""
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Address of the peer that sent the data\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "remotePort",
              "line": 173,
              "column": 7,
              "type": {
                "label": ""
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Port of the peer that sent the data\n"
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
                    "text": "Status code\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "receivePacket",
          "qualifier": "",
          "line": 209,
          "column": 13,
          "src": "srcs/sf-network-udpsocket.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 209,
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
                      "text": "receivePacket",
                      "href": "docs/sf__network__udpsocket___spec.html#L209C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 210,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "socket",
                      "href": "docs/sf__network__udpsocket___spec.html#L210C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
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
                      "href": "docs/sf__network___spec.html#L52C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 211,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "packet",
                      "href": "docs/sf__network__udpsocket___spec.html#L211C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
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
                      "text": "sfPacket_Ptr",
                      "href": "docs/sf__network___spec.html#L44C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 212,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "remoteAddress",
                      "href": "docs/sf__network__udpsocket___spec.html#L212C7"
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
                      "text": "Sf.Network.IpAddress.sfIpAddress",
                      "href": "docs/sf__network__ipaddress___spec.html#L36C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 213,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "remotePort",
                      "href": "docs/sf__network__udpsocket___spec.html#L213C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "text": "sfUint16",
                      "href": "docs/sf___spec.html#L97C9"
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
                      "text": "Sf.Network.SocketStatus.sfSocketStatus",
                      "href": "docs/sf__network__socketstatus___spec.html#L34C9"
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
                  "text": " Receive a formatted packet of data from a remote peer with a UDP socket\n"
                },
                {
                  "kind": "span",
                  "text": "In blocking mode, this function will wait until the whole packet\n"
                },
                {
                  "kind": "span",
                  "text": "has been received.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "socket",
              "line": 210,
              "column": 7,
              "type": {
                "label": "Sf.Network.sfUdpSocket_Ptr",
                "docHref": "docs/sf__network___spec.html#L52C9"
              },
              "description": [
              ]
            },
            {
              "label": "packet",
              "line": 211,
              "column": 7,
              "type": {
                "label": "Sf.Network.sfPacket_Ptr",
                "docHref": "docs/sf__network___spec.html#L44C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Packet to fill with the received data\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "remoteAddress",
              "line": 212,
              "column": 7,
              "type": {
                "label": ""
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Address of the peer that sent the data\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "remotePort",
              "line": 213,
              "column": 7,
              "type": {
                "label": ""
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Port of the peer that sent the data\n"
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
                    "text": "Status code\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "send",
          "qualifier": "",
          "line": 140,
          "column": 13,
          "src": "srcs/sf-network-udpsocket.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 140,
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
                      "text": "send",
                      "href": "docs/sf__network__udpsocket___spec.html#L140C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 141,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "socket",
                      "href": "docs/sf__network__udpsocket___spec.html#L141C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
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
                      "href": "docs/sf__network___spec.html#L52C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 142,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "data",
                      "href": "docs/sf__network__udpsocket___spec.html#L142C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "          "
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
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 143,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "size",
                      "href": "docs/sf__network__udpsocket___spec.html#L143C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "          "
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
                      "href": "docs/sf___spec.html#L124C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 144,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "remoteAddress",
                      "href": "docs/sf__network__udpsocket___spec.html#L144C7"
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
                      "text": "Sf.Network.IpAddress.sfIpAddress",
                      "href": "docs/sf__network__ipaddress___spec.html#L36C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 145,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "remotePort",
                      "href": "docs/sf__network__udpsocket___spec.html#L145C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "text": "sfUint16",
                      "href": "docs/sf___spec.html#L97C9"
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
                      "text": "Sf.Network.SocketStatus.sfSocketStatus",
                      "href": "docs/sf__network__socketstatus___spec.html#L34C9"
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
                  "text": " Send raw data to a remote peer with a UDP socket\n"
                },
                {
                  "kind": "span",
                  "text": "Make sure that @a size is not greater than\n"
                },
                {
                  "kind": "span",
                  "text": "sfUdpSocket_maxDatagramSize(), otherwise this function will\n"
                },
                {
                  "kind": "span",
                  "text": "fail and no data will be sent.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "socket",
              "line": 141,
              "column": 7,
              "type": {
                "label": "Sf.Network.sfUdpSocket_Ptr",
                "docHref": "docs/sf__network___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "UDP socket object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "data",
              "line": 142,
              "column": 7,
              "type": {
                "label": "Address"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Pointer to the sequence of bytes to send\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "size",
              "line": 143,
              "column": 7,
              "type": {
                "label": "Sf.sfSize_t",
                "docHref": "docs/sf___spec.html#L124C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Number of bytes to send\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "remoteAddress",
              "line": 144,
              "column": 7,
              "type": {
                "label": "Sf.Network.IpAddress.sfIpAddress",
                "docHref": "docs/sf__network__ipaddress___spec.html#L36C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Address of the receiver\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "remotePort",
              "line": 145,
              "column": 7,
              "type": {
                "label": "Sf.sfUint16",
                "docHref": "docs/sf___spec.html#L97C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Port of the receiver to send the data to\n"
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
                    "text": "Status code\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sendPacket",
          "qualifier": "",
          "line": 190,
          "column": 13,
          "src": "srcs/sf-network-udpsocket.ads.html",
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
                      "text": "sendPacket",
                      "href": "docs/sf__network__udpsocket___spec.html#L190C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 191,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "socket",
                      "href": "docs/sf__network__udpsocket___spec.html#L191C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
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
                      "href": "docs/sf__network___spec.html#L52C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 192,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "packet",
                      "href": "docs/sf__network__udpsocket___spec.html#L192C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
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
                      "text": "sfPacket_Ptr",
                      "href": "docs/sf__network___spec.html#L44C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 193,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "remoteAddress",
                      "href": "docs/sf__network__udpsocket___spec.html#L193C7"
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
                      "text": "Sf.Network.IpAddress.sfIpAddress",
                      "href": "docs/sf__network__ipaddress___spec.html#L36C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 194,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "remotePort",
                      "href": "docs/sf__network__udpsocket___spec.html#L194C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "text": "sfUint16",
                      "href": "docs/sf___spec.html#L97C9"
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
                      "text": "Sf.Network.SocketStatus.sfSocketStatus",
                      "href": "docs/sf__network__socketstatus___spec.html#L34C9"
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
                  "text": " Send a formatted packet of data to a remote peer with a UDP socket\n"
                },
                {
                  "kind": "span",
                  "text": "Make sure that the packet size is not greater than\n"
                },
                {
                  "kind": "span",
                  "text": "sfUdpSocket_maxDatagramSize(), otherwise this function will\n"
                },
                {
                  "kind": "span",
                  "text": "fail and no data will be sent.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "socket",
              "line": 191,
              "column": 7,
              "type": {
                "label": "Sf.Network.sfUdpSocket_Ptr",
                "docHref": "docs/sf__network___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "UDP socket object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "packet",
              "line": 192,
              "column": 7,
              "type": {
                "label": "Sf.Network.sfPacket_Ptr",
                "docHref": "docs/sf__network___spec.html#L44C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Packet to send\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "remoteAddress",
              "line": 193,
              "column": 7,
              "type": {
                "label": "Sf.Network.IpAddress.sfIpAddress",
                "docHref": "docs/sf__network__ipaddress___spec.html#L36C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Address of the receiver\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "remotePort",
              "line": 194,
              "column": 7,
              "type": {
                "label": "Sf.sfUint16",
                "docHref": "docs/sf___spec.html#L97C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Port of the receiver to send the data to\n"
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
                    "text": "Status code\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "setBlocking",
          "qualifier": "",
          "line": 64,
          "column": 14,
          "src": "srcs/sf-network-udpsocket.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 64,
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
                      "text": "setBlocking",
                      "href": "docs/sf__network__udpsocket___spec.html#L64C14"
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
                      "text": "socket",
                      "href": "docs/sf__network__udpsocket___spec.html#L64C27"
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
                      "href": "docs/sf__network___spec.html#L52C9"
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
                      "text": "blocking",
                      "href": "docs/sf__network__udpsocket___spec.html#L64C53"
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
                      "href": "docs/sf___spec.html#L68C9"
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
                  "text": " Set the blocking state of a UDP listener\n"
                },
                {
                  "kind": "span",
                  "text": "In blocking mode, calls will not return until they have\n"
                },
                {
                  "kind": "span",
                  "text": "completed their task. For example, a call to\n"
                },
                {
                  "kind": "span",
                  "text": "sfUDPSocket_receive in blocking mode won't return until\n"
                },
                {
                  "kind": "span",
                  "text": "new data was actually received.\n"
                },
                {
                  "kind": "span",
                  "text": "In non-blocking mode, calls will always return immediately,\n"
                },
                {
                  "kind": "span",
                  "text": "using the return code to signal whether there was data\n"
                },
                {
                  "kind": "span",
                  "text": "available or not.\n"
                },
                {
                  "kind": "span",
                  "text": "By default, all sockets are blocking.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "socket",
              "line": 64,
              "column": 27,
              "type": {
                "label": "Sf.Network.sfUdpSocket_Ptr",
                "docHref": "docs/sf__network___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "UDP socket object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "blocking",
              "line": 64,
              "column": 53,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf___spec.html#L68C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTrue to set the socket as blocking, sfFalse for non-blocking\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "unbind",
          "qualifier": "",
          "line": 122,
          "column": 14,
          "src": "srcs/sf-network-udpsocket.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 122,
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
                      "text": "unbind",
                      "href": "docs/sf__network__udpsocket___spec.html#L122C14"
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
                      "text": "socket",
                      "href": "docs/sf__network__udpsocket___spec.html#L122C22"
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
                      "href": "docs/sf__network___spec.html#L52C9"
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
                  "text": " Unbind a UDP socket from the local port to which it is bound\n"
                },
                {
                  "kind": "span",
                  "text": "The port that the socket was previously using is immediately\n"
                },
                {
                  "kind": "span",
                  "text": "available after this function is called. If the\n"
                },
                {
                  "kind": "span",
                  "text": "socket is not bound to a port, this function has no effect.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "socket",
              "line": 122,
              "column": 22,
              "type": {
                "label": "Sf.Network.sfUdpSocket_Ptr",
                "docHref": "docs/sf__network___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "UDP socket object\n"
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