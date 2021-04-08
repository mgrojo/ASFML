GNATdoc.Documentation = {
  "label": "Sf.Window.Sensor",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "sfSensorType",
          "qualifier": "",
          "line": 41,
          "column": 9,
          "src": "srcs/sf-window-sensor.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 41,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfSensorType",
                      "href": "docs/sf__window__sensor___spec.html#L41C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 42,
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
                      "text": "sfSensorAccelerometer",
                      "href": "docs/sf__window__sensor___spec.html#L42C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 43,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfSensorGyroscope",
                      "href": "docs/sf__window__sensor___spec.html#L43C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 44,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfSensorMagnetometer",
                      "href": "docs/sf__window__sensor___spec.html#L44C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 45,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfSensorGravity",
                      "href": "docs/sf__window__sensor___spec.html#L45C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 46,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfSensorUserAcceleration",
                      "href": "docs/sf__window__sensor___spec.html#L46C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 47,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfSensorOrientation",
                      "href": "docs/sf__window__sensor___spec.html#L47C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 48,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfSensorCount",
                      "href": "docs/sf__window__sensor___spec.html#L48C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";",
                      "href": "docs/sf__window__sensor___spec.html#L41C9"
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
                  "text": " Sensor Types\n"
                },
                {
                  "kind": "span",
                  "text": "Measures the raw acceleration (m/s^2)\n"
                },
                {
                  "kind": "span",
                  "text": "Measures the raw rotation rates (degrees/s)\n"
                },
                {
                  "kind": "span",
                  "text": "Measures the ambient magnetic field (micro-teslas)\n"
                },
                {
                  "kind": "span",
                  "text": "Measures the direction and intensity of gravity, independent of device acceleration (m/s^2)\n"
                },
                {
                  "kind": "span",
                  "text": "Measures the direction and intensity of device acceleration, independent of the gravity (m/s^2)\n"
                },
                {
                  "kind": "span",
                  "text": "Measures the absolute 3D orientation (degrees)\n"
                },
                {
                  "kind": "span",
                  "text": "Keep last -- the total number of sensor types\n"
                }
              ]
            }
          ],
          "literals": [
            {
              "label": "sfSensorAccelerometer",
              "line": 42,
              "column": 7,
              "description": [
              ]
            },
            {
              "label": "sfSensorGyroscope",
              "line": 43,
              "column": 7,
              "description": [
              ]
            },
            {
              "label": "sfSensorMagnetometer",
              "line": 44,
              "column": 7,
              "description": [
              ]
            },
            {
              "label": "sfSensorGravity",
              "line": 45,
              "column": 7,
              "description": [
              ]
            },
            {
              "label": "sfSensorUserAcceleration",
              "line": 46,
              "column": 7,
              "description": [
              ]
            },
            {
              "label": "sfSensorOrientation",
              "line": 47,
              "column": 7,
              "description": [
              ]
            },
            {
              "label": "sfSensorCount",
              "line": 48,
              "column": 7,
              "description": [
              ]
            }
          ]
        }
      ],
      "label": "Simple types"
    },
    {
      "entities": [
        {
          "label": "getValue",
          "qualifier": "",
          "line": 84,
          "column": 13,
          "src": "srcs/sf-window-sensor.ads.html",
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
                      "text": "getValue",
                      "href": "docs/sf__window__sensor___spec.html#L84C13"
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
                      "text": "sensor",
                      "href": "docs/sf__window__sensor___spec.html#L84C23"
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
                      "text": "sfSensorType",
                      "href": "docs/sf__window__sensor___spec.html#L41C9"
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
                      "href": "docs/sf__system__vector3___spec.html#L33C9"
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
                  "text": " Get the current sensor value\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "sensor",
              "line": 84,
              "column": 23,
              "type": {
                "label": "Sf.Window.Sensor.sfSensorType",
                "docHref": "docs/sf__window__sensor___spec.html#L41C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Sensor to read\n"
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
                    "text": "The current sensor value\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "isAvailable",
          "qualifier": "",
          "line": 59,
          "column": 13,
          "src": "srcs/sf-window-sensor.ads.html",
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
                      "text": "isAvailable",
                      "href": "docs/sf__window__sensor___spec.html#L59C13"
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
                      "text": "sensor",
                      "href": "docs/sf__window__sensor___spec.html#L59C26"
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
                      "text": "sfSensorType",
                      "href": "docs/sf__window__sensor___spec.html#L41C9"
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
                  "text": " Check if a sensor is available on the underlying platform\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "sensor",
              "line": 59,
              "column": 26,
              "type": {
                "label": "Sf.Window.Sensor.sfSensorType",
                "docHref": "docs/sf__window__sensor___spec.html#L41C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Sensor to check\n"
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
                    "text": "sfTrue if the sensor is available, sfFalse otherwise\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "setEnabled",
          "qualifier": "",
          "line": 74,
          "column": 14,
          "src": "srcs/sf-window-sensor.ads.html",
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
                      "text": "setEnabled",
                      "href": "docs/sf__window__sensor___spec.html#L74C14"
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
                      "text": "sensor",
                      "href": "docs/sf__window__sensor___spec.html#L74C26"
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
                      "text": "sfSensorType",
                      "href": "docs/sf__window__sensor___spec.html#L41C9"
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
                      "text": "enabled",
                      "href": "docs/sf__window__sensor___spec.html#L74C49"
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
                  "text": " Enable or disable a sensor\n"
                },
                {
                  "kind": "span",
                  "text": "All sensors are disabled by default, to avoid consuming too\n"
                },
                {
                  "kind": "span",
                  "text": "much battery power. Once a sensor is enabled, it starts\n"
                },
                {
                  "kind": "span",
                  "text": "sending events of the corresponding type.\n"
                },
                {
                  "kind": "span",
                  "text": "This function does nothing if the sensor is unavailable.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "sensor",
              "line": 74,
              "column": 26,
              "type": {
                "label": "Sf.Window.Sensor.sfSensorType",
                "docHref": "docs/sf__window__sensor___spec.html#L41C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Sensor to enable\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "enabled",
              "line": 74,
              "column": 49,
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
                      "text": "sfTrue to enable, sfFalse to disable\n"
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