GNATdoc.Documentation = {
  "label": "Sf.System.Clock",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "copy",
          "qualifier": "",
          "line": 45,
          "column": 13,
          "src": "srcs/sf-system-clock.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 45,
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
                      "text": "copy",
                      "href": "docs/sf__system__clock___spec.html#L45C13"
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
                      "text": "clock",
                      "href": "docs/sf__system__clock___spec.html#L45C19"
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
                      "text": "sfClock_Ptr",
                      "href": "docs/sf__system___spec.html#L33C9"
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
                      "text": "sfClock_Ptr",
                      "href": "docs/sf__system___spec.html#L33C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " Create a new clock by copying an existing one\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "clock",
              "line": 45,
              "column": 19,
              "type": {
                "label": "Sf.System.sfClock_Ptr",
                "docHref": "docs/sf__system___spec.html#L33C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Clock to copy\n"
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
                    "text": "A new sfClock object which is a copy of\n"
                  },
                  {
                    "kind": "html",
                    "html": " <em>clock</em> ",
                    "children": [
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "create",
          "qualifier": "",
          "line": 35,
          "column": 13,
          "src": "srcs/sf-system-clock.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 35,
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
                      "href": "docs/sf__system__clock___spec.html#L35C13"
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
                      "text": "sfClock_Ptr",
                      "href": "docs/sf__system___spec.html#L33C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " Create a new clock and start it\n"
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
                    "text": "A new sfClock object\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "destroy",
          "qualifier": "",
          "line": 53,
          "column": 14,
          "src": "srcs/sf-system-clock.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 53,
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
                      "href": "docs/sf__system__clock___spec.html#L53C14"
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
                      "text": "clock",
                      "href": "docs/sf__system__clock___spec.html#L53C23"
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
                      "text": "sfClock_Ptr",
                      "href": "docs/sf__system___spec.html#L33C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " Destroy a clock\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "clock",
              "line": 53,
              "column": 23,
              "type": {
                "label": "Sf.System.sfClock_Ptr",
                "docHref": "docs/sf__system___spec.html#L33C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Clock to destroy\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "getElapsedTime",
          "qualifier": "",
          "line": 67,
          "column": 13,
          "src": "srcs/sf-system-clock.ads.html",
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
                      "text": "getElapsedTime",
                      "href": "docs/sf__system__clock___spec.html#L67C13"
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
                      "text": "clock",
                      "href": "docs/sf__system__clock___spec.html#L67C29"
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
                      "text": "sfClock_Ptr",
                      "href": "docs/sf__system___spec.html#L33C9"
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
                      "href": "docs/sf__system__time___spec.html#L28C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " Get the time elapsed in a clock\n"
                },
                {
                  "kind": "span",
                  "text": "This function returns the time elapsed since the last call\n"
                },
                {
                  "kind": "span",
                  "text": "to sfClock_restart (or the construction of the object if\n"
                },
                {
                  "kind": "span",
                  "text": "sfClock_restart has not been called).\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "clock",
              "line": 67,
              "column": 29,
              "type": {
                "label": "Sf.System.sfClock_Ptr",
                "docHref": "docs/sf__system___spec.html#L33C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Clock object\n"
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
                    "text": "Time elapsed\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "isRunning",
          "qualifier": "",
          "line": 77,
          "column": 13,
          "src": "srcs/sf-system-clock.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 77,
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
                      "text": "isRunning",
                      "href": "docs/sf__system__clock___spec.html#L77C13"
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
                      "text": "clock",
                      "href": "docs/sf__system__clock___spec.html#L77C24"
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
                      "text": "sfClock_Ptr",
                      "href": "docs/sf__system___spec.html#L33C9"
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
                      "href": "docs/sf___spec.html#L53C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " Check whether the clock is running\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "clock",
              "line": 77,
              "column": 24,
              "type": {
                "label": "Sf.System.sfClock_Ptr",
                "docHref": "docs/sf__system___spec.html#L33C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Clock object\n"
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
                    "text": "sfTrue if the clock is running, sfFalse otherwise\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "reset",
          "qualifier": "",
          "line": 125,
          "column": 13,
          "src": "srcs/sf-system-clock.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 125,
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
                      "text": "reset",
                      "href": "docs/sf__system__clock___spec.html#L125C13"
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
                      "text": "clock",
                      "href": "docs/sf__system__clock___spec.html#L125C20"
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
                      "text": "sfClock_Ptr",
                      "href": "docs/sf__system___spec.html#L33C9"
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
                      "href": "docs/sf__system__time___spec.html#L28C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " Reset the clock\n"
                },
                {
                  "kind": "span",
                  "text": "This function puts the time counter back to zero, returns the\n"
                },
                {
                  "kind": "span",
                  "text": "elapsed time, and leaves the clock stopped. Call start to resume.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "clock",
              "line": 125,
              "column": 20,
              "type": {
                "label": "Sf.System.sfClock_Ptr",
                "docHref": "docs/sf__system___spec.html#L33C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Clock object\n"
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
                    "text": "Time elapsed\n"
                  },
                  {
                    "kind": "html",
                    "html": "<br/><br/><span class=\"info\">See:</span> ",
                    "children": [
                    ]
                  },
                  {
                    "kind": "span",
                    "text": " `restart`\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "restart",
          "qualifier": "",
          "line": 111,
          "column": 13,
          "src": "srcs/sf-system-clock.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 111,
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
                      "text": "restart",
                      "href": "docs/sf__system__clock___spec.html#L111C13"
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
                      "text": "clock",
                      "href": "docs/sf__system__clock___spec.html#L111C22"
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
                      "text": "sfClock_Ptr",
                      "href": "docs/sf__system___spec.html#L33C9"
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
                      "href": "docs/sf__system__time___spec.html#L28C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " Restart a clock\n"
                },
                {
                  "kind": "span",
                  "text": "This function puts the time counter back to zero.\n"
                },
                {
                  "kind": "span",
                  "text": "It also returns the time elapsed since the clock was started.\n"
                },
                {
                  "kind": "span",
                  "text": "The clock keeps running after the restart.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "clock",
              "line": 111,
              "column": 22,
              "type": {
                "label": "Sf.System.sfClock_Ptr",
                "docHref": "docs/sf__system___spec.html#L33C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Clock object\n"
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
                    "text": "Time elapsed\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "start",
          "qualifier": "",
          "line": 87,
          "column": 14,
          "src": "srcs/sf-system-clock.ads.html",
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
                      "text": "start",
                      "href": "docs/sf__system__clock___spec.html#L87C14"
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
                      "text": "clock",
                      "href": "docs/sf__system__clock___spec.html#L87C21"
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
                      "text": "sfClock_Ptr",
                      "href": "docs/sf__system___spec.html#L33C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " Start the clock\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "clock",
              "line": 87,
              "column": 21,
              "type": {
                "label": "Sf.System.sfClock_Ptr",
                "docHref": "docs/sf__system___spec.html#L33C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Clock object\n"
                    },
                    {
                      "kind": "html",
                      "html": "<br/><br/><span class=\"info\">See:</span> ",
                      "children": [
                      ]
                    },
                    {
                      "kind": "span",
                      "text": " stop\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "stop",
          "qualifier": "",
          "line": 97,
          "column": 14,
          "src": "srcs/sf-system-clock.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 97,
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
                      "text": "stop",
                      "href": "docs/sf__system__clock___spec.html#L97C14"
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
                      "text": "clock",
                      "href": "docs/sf__system__clock___spec.html#L97C20"
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
                      "text": "sfClock_Ptr",
                      "href": "docs/sf__system___spec.html#L33C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " Stop (pause) the clock\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "clock",
              "line": 97,
              "column": 20,
              "type": {
                "label": "Sf.System.sfClock_Ptr",
                "docHref": "docs/sf__system___spec.html#L33C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Clock object\n"
                    },
                    {
                      "kind": "html",
                      "html": "<br/><br/><span class=\"info\">See:</span> ",
                      "children": [
                      ]
                    },
                    {
                      "kind": "span",
                      "text": " start\n"
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