(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.78,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_14C905E5_1BB0_0B2F_41B2_66C4C11360CD",
 "automaticZoomSpeed": 10
},
{
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 1000
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetPitch": 0,
   "duration": 3000,
   "targetStereographicFactor": 0
  }
 ],
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_camera",
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "yaw": 0,
  "hfov": 165,
  "pitch": -90
 },
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Foto_2_0412",
 "id": "panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E",
 "cardboardMenu": "this.Menu_14B515D0_1BB0_0B66_41B6_3FD44BB369B0",
 "pitch": 0,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 152.16,
   "panorama": "this.panorama_CD23D4FE_C70F_F407_419E_5895B56D8386",
   "backwardYaw": 176.22,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -111.13,
   "panorama": "this.panorama_CD08545C_C70F_540B_41E6_EE1938C09581",
   "backwardYaw": 127.48,
   "distance": 1
  }
 ],
 "hfovMax": 120,
 "vfov": 180,
 "overlays": [
  "this.overlay_CB66A879_C70F_3C0C_4184_BFB9F245A03A",
  "this.overlay_CB66B879_C70F_3C0C_41C9_44948D0E71AE",
  "this.overlay_DCE59DFD_CFDB_83FC_41B3_93798AB480A1",
  "this.overlay_DDA385BC_CF78_807C_41D4_6A3158F39B69"
 ],
 "thumbnailUrl": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "class": "Panorama",
 "label": "FOTO_1_0417",
 "id": "panorama_CD23D4FE_C70F_F407_419E_5895B56D8386",
 "cardboardMenu": "this.Menu_14B515D0_1BB0_0B66_41B6_3FD44BB369B0",
 "pitch": 0,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 176.22,
   "panorama": "this.panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E",
   "backwardYaw": 152.16,
   "distance": 1
  }
 ],
 "hfovMax": 120,
 "vfov": 180,
 "overlays": [
  "this.overlay_CD23A4FE_C70F_F407_41E5_7BE493DD8A59",
  "this.overlay_CD2384FE_C70F_F407_41DD_A6F863767ECD",
  "this.panorama_CD2394FF_C70F_F405_41A7_E5A9B2693DDB",
  "this.overlay_D89F2884_C8CA_7A24_41B0_158BE4BFACAF"
 ],
 "thumbnailUrl": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_t.jpg",
 "hfov": 360
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "campo",
 "id": "photo_DC8926C4_CB4B_8003_41C4_B2B462E3F806",
 "width": 1115,
 "thumbnailUrl": "media/photo_DC8926C4_CB4B_8003_41C4_B2B462E3F806_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_DC8926C4_CB4B_8003_41C4_B2B462E3F806.jpg"
   }
  ]
 },
 "height": 712
},
{
 "audio": {
  "oggUrl": "media/audio_D8660F6C_C8CF_B6EB_41DA_599061733630.ogg",
  "class": "AudioResource",
  "mp3Url": "media/audio_D8660F6C_C8CF_B6EB_41DA_599061733630.mp3"
 },
 "class": "MediaAudio",
 "id": "audio_D8660F6C_C8CF_B6EB_41DA_599061733630",
 "autoplay": true,
 "data": {
  "label": "birds"
 }
},
{
 "footerHeight": 5,
 "bodyBackgroundColor": [
  "#FFFFFF"
 ],
 "id": "window_DD808C27_CB38_800C_41C7_6C8E97ECEE60",
 "headerBackgroundColorDirection": "vertical",
 "width": 400,
 "shadowBlurRadius": 6,
 "footerBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "bodyPaddingRight": 5,
 "titlePaddingRight": 5,
 "shadow": true,
 "contentOpaque": false,
 "headerBorderSize": 0,
 "titleFontFamily": "Arial",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "verticalAlign": "middle",
 "modal": true,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "headerPaddingTop": 10,
 "titleTextDecoration": "none",
 "height": 400,
 "closeButtonPaddingBottom": 0,
 "backgroundColorRatios": [],
 "paddingRight": 0,
 "borderSize": 0,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundColor": [],
 "minHeight": 20,
 "title": "",
 "footerBackgroundColorRatios": [
  1
 ],
 "gap": 10,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "scrollBarOpacity": 0.5,
 "bodyBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "headerPaddingBottom": 10,
 "headerPaddingLeft": 10,
 "paddingTop": 0,
 "closeButtonPaddingRight": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "scrollBarColor": "#000000",
 "headerBorderColor": "#000000",
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "closeButtonBackgroundColorRatios": [
  0.91
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowSpread": 1,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "children": [
  "this.htmlText_DDFEBC27_CB38_800C_41E2_F68339D0206D",
  "this.image_uid14B805CE_1BB0_0B7D_41A9_FC54CD8485E0_1"
 ],
 "shadowColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#000000"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "backgroundOpacity": 1,
 "bodyBorderColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPaddingLeft": 0,
 "titleFontColor": "#000000",
 "closeButtonIconHeight": 12,
 "titleFontSize": "1.29vmin",
 "veilColorDirection": "horizontal",
 "closeButtonPaddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "minWidth": 20,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "footerBorderColor": "#000000",
 "paddingLeft": 0,
 "shadowHorizontalLength": 3,
 "headerBackgroundColorRatios": [
  1
 ],
 "layout": "vertical",
 "headerVerticalAlign": "middle",
 "closeButtonIconLineWidth": 2,
 "headerPaddingRight": 10,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "bodyPaddingLeft": 5,
 "closeButtonBorderColor": "#000000",
 "titlePaddingLeft": 5,
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  1
 ],
 "closeButtonIconColor": "#000000",
 "backgroundColorDirection": "vertical",
 "bodyPaddingBottom": 5,
 "headerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Window11457"
 },
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -27.84,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_14D0A61C_1BB0_091E_41AE_39EF0ED6930F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_camera",
 "automaticZoomSpeed": 10
},
{
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_15A4F332_1BB0_0F25_41B5_5D602CCA8E61"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Foto_2_0412",
 "id": "photo_CB11CEC5_C70F_5405_41DB_BB4A5B8A1C9D",
 "width": 2095,
 "thumbnailUrl": "media/photo_CB11CEC5_C70F_5405_41DB_BB4A5B8A1C9D_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_CB11CEC5_C70F_5405_41DB_BB4A5B8A1C9D.jpg"
   }
  ]
 },
 "height": 1048
},
{
 "footerHeight": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "id": "window_DC73A1C8_CFD8_8004_41DF_FD8F6C2917B2",
 "headerBackgroundColorDirection": "vertical",
 "width": 400,
 "shadowBlurRadius": 6,
 "footerBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "bodyPaddingRight": 5,
 "titlePaddingRight": 5,
 "shadow": true,
 "contentOpaque": false,
 "closeButtonRollOverBorderSize": 0,
 "titleFontFamily": "Arial",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "headerBorderSize": 0,
 "verticalAlign": "middle",
 "modal": true,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "headerPaddingTop": 10,
 "titleTextDecoration": "none",
 "height": 300,
 "closeButtonPaddingBottom": 0,
 "backgroundColorRatios": [],
 "paddingRight": 0,
 "borderSize": 0,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundColor": [],
 "minHeight": 20,
 "title": "",
 "footerBackgroundColorRatios": [
  1
 ],
 "gap": 10,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "scrollBarOpacity": 0.5,
 "bodyBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "headerPaddingBottom": 10,
 "headerPaddingLeft": 10,
 "paddingTop": 0,
 "closeButtonPaddingRight": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "scrollBarColor": "#000000",
 "headerBorderColor": "#000000",
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "closeButtonBackgroundColorRatios": [
  0.94
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "shadowSpread": 1,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "children": [
  "this.htmlText_DC7381C8_CFD8_8004_41E7_260DF3D44C65",
  "this.image_uid14B8B5CE_1BB0_0B7D_41B9_51F79A1E18BD_1"
 ],
 "shadowColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#000000"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "backgroundOpacity": 1,
 "bodyBorderColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPaddingLeft": 0,
 "titleFontColor": "#000000",
 "closeButtonIconHeight": 12,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "minWidth": 20,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "footerBorderColor": "#000000",
 "paddingLeft": 0,
 "shadowHorizontalLength": 3,
 "headerBackgroundColorRatios": [
  1
 ],
 "layout": "vertical",
 "headerVerticalAlign": "middle",
 "closeButtonIconLineWidth": 2,
 "headerPaddingRight": 10,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyPaddingLeft": 5,
 "closeButtonBorderColor": "#000000",
 "titlePaddingLeft": 5,
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "backgroundColorDirection": "vertical",
 "bodyPaddingBottom": 5,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverIconLineWidth": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Window4699"
 },
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "quincho",
 "id": "photo_DD86BF4B_CB4B_9F52_41DD_D3D040A97ECA",
 "width": 1081,
 "thumbnailUrl": "media/photo_DD86BF4B_CB4B_9F52_41DD_D3D040A97ECA_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_DD86BF4B_CB4B_9F52_41DD_D3D040A97ECA.jpg"
   }
  ]
 },
 "height": 728
},
{
 "footerHeight": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "id": "window_D34F56E1_C2E4_E878_41D9_C026D07D3C37",
 "headerBackgroundColorDirection": "vertical",
 "width": 400,
 "shadowBlurRadius": 6,
 "footerBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "bodyPaddingRight": 5,
 "titlePaddingRight": 5,
 "shadow": true,
 "contentOpaque": false,
 "headerBorderSize": 0,
 "titleFontFamily": "Arial",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "verticalAlign": "middle",
 "modal": true,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "closeButtonPaddingBottom": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "headerPaddingTop": 10,
 "titleTextDecoration": "none",
 "height": 400,
 "closeButtonBackgroundOpacity": 1,
 "backgroundColorRatios": [],
 "paddingRight": 0,
 "borderSize": 0,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundColor": [],
 "minHeight": 20,
 "title": "                              ",
 "footerBackgroundColorRatios": [
  1
 ],
 "gap": 10,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "scrollBarOpacity": 0.5,
 "bodyBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "headerPaddingBottom": 10,
 "headerPaddingLeft": 10,
 "paddingTop": 0,
 "closeButtonPaddingRight": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "scrollBarColor": "#000000",
 "headerBorderColor": "#000000",
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "shadowSpread": 1,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "children": [
  "this.htmlText_D34D06E1_C2E4_E878_41E2_F8BDADA5E379",
  "this.image_uid14BA55CC_1BB0_0B7D_41B5_AD470800794E_1"
 ],
 "shadowColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#000000"
 ],
 "titleFontWeight": "bold",
 "veilOpacity": 0.4,
 "backgroundOpacity": 1,
 "bodyBorderColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPaddingLeft": 0,
 "titleFontColor": "#000000",
 "closeButtonIconHeight": 12,
 "titleFontSize": "3vmin",
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "minWidth": 20,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "footerBorderColor": "#000000",
 "paddingLeft": 0,
 "shadowHorizontalLength": 3,
 "headerBackgroundColorRatios": [
  1
 ],
 "layout": "vertical",
 "headerVerticalAlign": "middle",
 "closeButtonIconLineWidth": 2,
 "headerPaddingRight": 10,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "bodyPaddingLeft": 5,
 "closeButtonBorderColor": "#000000",
 "titlePaddingLeft": 5,
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "backgroundColorDirection": "vertical",
 "bodyPaddingBottom": 5,
 "headerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Window7700"
 },
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 }
},
{
 "footerHeight": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "id": "window_DD0C05DD_CB49_8341_41E9_871C0F2C29CE",
 "headerBackgroundColorDirection": "vertical",
 "width": 400,
 "shadowBlurRadius": 6,
 "footerBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "bodyPaddingRight": 5,
 "titlePaddingRight": 5,
 "shadow": true,
 "contentOpaque": false,
 "closeButtonRollOverBorderSize": 0,
 "titleFontFamily": "Arial",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "headerBorderSize": 0,
 "verticalAlign": "middle",
 "modal": true,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "headerPaddingTop": 10,
 "titleTextDecoration": "none",
 "height": 400,
 "closeButtonPaddingBottom": 0,
 "backgroundColorRatios": [],
 "paddingRight": 0,
 "borderSize": 0,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundColor": [],
 "minHeight": 20,
 "title": "",
 "footerBackgroundColorRatios": [
  1
 ],
 "gap": 10,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "scrollBarOpacity": 0.5,
 "bodyBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "headerPaddingBottom": 10,
 "headerPaddingLeft": 10,
 "paddingTop": 0,
 "closeButtonPaddingRight": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "scrollBarColor": "#000000",
 "headerBorderColor": "#000000",
 "closeButtonBorderRadius": 11,
 "scrollBarVisible": "rollOver",
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "closeButtonBackgroundColorRatios": [
  0.82
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonRollOverBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "shadowSpread": 1,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "children": [
  "this.htmlText_DD0E35DD_CB49_8341_41E8_0B09C6812268",
  "this.image_uid14B725CF_1BB0_0B7B_41A5_067D022C58BE_1"
 ],
 "shadowColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#000000"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "backgroundOpacity": 1,
 "bodyBorderColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPaddingLeft": 0,
 "titleFontColor": "#000000",
 "closeButtonIconHeight": 12,
 "titleFontSize": "1.29vmin",
 "veilColorDirection": "horizontal",
 "closeButtonPaddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "minWidth": 20,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "footerBorderColor": "#000000",
 "paddingLeft": 0,
 "shadowHorizontalLength": 3,
 "headerBackgroundColorRatios": [
  1
 ],
 "layout": "vertical",
 "headerVerticalAlign": "middle",
 "closeButtonIconLineWidth": 2,
 "headerPaddingRight": 10,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "closeButtonRollOverBorderColor": "#000000",
 "bodyPaddingLeft": 5,
 "closeButtonBorderColor": "#000000",
 "titlePaddingLeft": 5,
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "backgroundColorDirection": "vertical",
 "bodyPaddingBottom": 5,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverIconLineWidth": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Window15611"
 },
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 }
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Foto_3_0414",
 "id": "panorama_CD08545C_C70F_540B_41E6_EE1938C09581",
 "cardboardMenu": "this.Menu_14B515D0_1BB0_0B66_41B6_3FD44BB369B0",
 "pitch": 0,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0/b/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0/b/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0/u/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0/u/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0/r/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0/r/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0/d/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0/d/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0/f/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0/f/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0/l/0/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0/l/1/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 127.48,
   "panorama": "this.panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E",
   "backwardYaw": -111.13,
   "distance": 1
  }
 ],
 "hfovMax": 120,
 "vfov": 180,
 "overlays": [
  "this.overlay_CD08745C_C70F_540B_41A3_0E534681CB7E",
  "this.overlay_CD08645D_C70F_5405_41DC_B3F44E11450C",
  "this.overlay_DD059238_CB58_80DA_41CC_C0D55CE8A8A0"
 ],
 "thumbnailUrl": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.87,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_14E1563E_1BB0_091A_419D_DE2FB9E7D665",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -52.52,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_14DF35F7_1BB0_0B2A_41B7_E14B75961299",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_CD23D4FE_C70F_F407_419E_5895B56D8386",
   "camera": "this.panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E",
   "camera": "this.panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
   "media": "this.panorama_CD08545C_C70F_540B_41E6_EE1938C09581",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_CD08545C_C70F_540B_41E6_EE1938C09581_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "selectedBackgroundColor": "#202020",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "children": [
  {
   "class": "MenuItem",
   "label": "FOTO_1_0417",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "class": "MenuItem",
   "label": "Foto_2_0412",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "MenuItem",
   "label": "Foto_3_0414",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "label": "Media",
 "rollOverFontColor": "#FFFFFF",
 "id": "Menu_14B515D0_1BB0_0B66_41B6_3FD44BB369B0",
 "selectedFontColor": "#FFFFFF",
 "class": "Menu",
 "opacity": 0.4,
 "rollOverBackgroundColor": "#000000",
 "backgroundColor": "#404040",
 "rollOverOpacity": 0.8
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CD08545C_C70F_540B_41E6_EE1938C09581_camera",
 "automaticZoomSpeed": 10
},
{
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipBorderSize": 1,
 "progressBorderSize": 0,
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "width": "100%",
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingLeft": 6,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "class": "ViewerArea",
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "height": "100%",
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "12px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "top": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "paddingLeft": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#FF0000",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF"
},
{
 "id": "Image_DCD89F3C_CFD9_807C_41B5_737653CF36EF",
 "left": "2.36%",
 "width": "15.128%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "maxWidth": 500,
 "url": "skin/Image_DCD89F3C_CFD9_807C_41B5_737653CF36EF.png",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "7.88%",
 "propagateClick": false,
 "paddingRight": 0,
 "maxHeight": 200,
 "paddingLeft": 0,
 "height": "17.916%",
 "class": "Image",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "data": {
  "name": "Image3532"
 },
 "scaleMode": "fit_inside",
 "paddingTop": 0
},
{
 "id": "IconButton_15A4F332_1BB0_0F25_41B5_5D602CCA8E61",
 "width": 35,
 "right": "9.27%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "maxWidth": 35,
 "borderRadius": 0,
 "cursor": "hand",
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "maxHeight": 23,
 "paddingLeft": 0,
 "bottom": "14.87%",
 "mode": "push",
 "transparencyActive": false,
 "height": 23,
 "class": "IconButton",
 "iconURL": "skin/IconButton_15A4F332_1BB0_0F25_41B5_5D602CCA8E61.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "data": {
  "name": "IconButton7201"
 },
 "paddingTop": 0
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD08545C_C70F_540B_41E6_EE1938C09581, this.camera_14DF35F7_1BB0_0B2A_41B7_E14B75961299); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "Quincho",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.13,
   "hfov": 9.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -8.01
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DA04024E_CB38_801F_41E9_3D20506FB786",
   "pitch": -8.01,
   "yaw": -111.13,
   "hfov": 9.9,
   "distance": 100
  }
 ],
 "id": "overlay_CB66A879_C70F_3C0C_4184_BFB9F245A03A",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD23D4FE_C70F_F407_419E_5895B56D8386, this.camera_14C905E5_1BB0_0B2F_41B2_66C4C11360CD); this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "Salida",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152.16,
   "hfov": 9.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_1_HS_3_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -2.91
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C59786ED_C938_86BF_41C2_FDFE324308FF",
   "pitch": -2.91,
   "yaw": 152.16,
   "hfov": 9.99,
   "distance": 100
  }
 ],
 "id": "overlay_CB66B879_C70F_3C0C_41C9_44948D0E71AE",
 "data": {
  "label": "Salida"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_DC73A1C8_CFD8_8004_41DF_FD8F6C2917B2, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.31,
   "hfov": 58.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0_HS_4_1_0_map.gif",
      "width": 188,
      "height": 66
     }
    ]
   },
   "pitch": 3.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 58.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0_HS_4_0.png",
      "width": 376,
      "height": 132
     }
    ]
   },
   "pitch": 3.24,
   "yaw": -11.31,
   "distance": 50
  }
 ],
 "id": "overlay_DCE59DFD_CFDB_83FC_41B3_93798AB480A1",
 "data": {
  "label": "Porton"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_DD808C27_CB38_800C_41C7_6C8E97ECEE60, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.24,
   "hfov": 11.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DA05124F_CB38_801D_41E8_B515CBD23B04",
   "pitch": -7.97,
   "yaw": -136.24,
   "hfov": 11.06,
   "distance": 100
  }
 ],
 "id": "overlay_DDA385BC_CF78_807C_41D4_6A3158F39B69",
 "data": {
  "label": "Cesped"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E, this.camera_14D0A61C_1BB0_091E_41AE_39EF0ED6930F); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Entrada",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.22,
   "hfov": 9.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -10.15
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C59F76E8_C938_86A5_41D4_293E2E118E1D",
   "pitch": -10.15,
   "yaw": 176.22,
   "hfov": 9.84,
   "distance": 100
  }
 ],
 "id": "overlay_CD23A4FE_C70F_F407_41E5_7BE493DD8A59",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_D34F56E1_C2E4_E878_41D9_C026D07D3C37, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.95,
   "hfov": 10.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DA2DCC9B_CB49_8113_41C6_34BC48805B21",
   "pitch": -1.57,
   "yaw": -158.95,
   "hfov": 10.99,
   "distance": 100
  }
 ],
 "id": "overlay_CD2384FE_C70F_F407_41DD_A6F863767ECD",
 "data": {
  "label": "Info Red 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "inertia": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CD2394FF_C70F_F405_41A7_E5A9B2693DDB",
 "hfov": 45,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CD2394FF_C70F_F405_41A7_E5A9B2693DDB.png",
    "width": 850,
    "height": 850
   }
  ]
 }
},
{
 "yaw": 25.95,
 "bleachingDistance": 0.4,
 "bleaching": 0.48,
 "pitch": 38.67,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D89F2884_C8CA_7A24_41B0_158BE4BFACAF"
},
{
 "id": "htmlText_DDFEBC27_CB38_800C_41E2_F68339D0206D",
 "width": "100%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "32%",
 "class": "HTMLText",
 "borderSize": 0,
 "minHeight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">El extenso parque de c\u00e9sped bien mantenido ofrece el espacio perfecto para actividades al aire libre y recreaci\u00f3n familiar.</SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText11458"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 10
},
{
 "id": "image_uid14B805CE_1BB0_0B7D_41A9_FC54CD8485E0_1",
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "url": "media/photo_DC8926C4_CB4B_8003_41C4_B2B462E3F806.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "67%",
 "class": "Image",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9116"
 },
 "paddingTop": 0
},
{
 "id": "htmlText_DC7381C8_CFD8_8004_41E7_260DF3D44C65",
 "width": "100%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "28%",
 "class": "HTMLText",
 "borderSize": 0,
 "minHeight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Vista exterior de la casa principal. Destaca su dise\u00f1o r\u00fastico con amplios ventanales que aseguran una excelente luminosidad natural.</SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText4700"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 10
},
{
 "id": "image_uid14B8B5CE_1BB0_0B7D_41B9_51F79A1E18BD_1",
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "url": "media/photo_CB11CEC5_C70F_5405_41DB_BB4A5B8A1C9D.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "71%",
 "class": "Image",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9115"
 },
 "paddingTop": 0
},
{
 "id": "htmlText_D34D06E1_C2E4_E878_41E2_F8BDADA5E379",
 "width": "100%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "29%",
 "class": "HTMLText",
 "borderSize": 0,
 "minHeight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u00a1Bienvenidos! Comenzamos el recorrido en el acceso a la propiedad. Un entorno tranquilo y natural, caracterizado por calles amplias y una atm\u00f3sfera de serenidad absoluta. Un lugar donde la paz del campo se siente desde el primer momento.</SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText7701"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 10
},
{
 "id": "image_uid14BA55CC_1BB0_0B7D_41B5_AD470800794E_1",
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "url": "media/photo_CB11CEC5_C70F_5405_41DB_BB4A5B8A1C9D.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "70%",
 "class": "Image",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9114"
 },
 "paddingTop": 0
},
{
 "id": "htmlText_DD0E35DD_CB49_8341_41E8_0B09C6812268",
 "width": "100%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "26%",
 "class": "HTMLText",
 "borderSize": 0,
 "minHeight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Este sector cuenta con un quincho techado equipado con mesa y bancos fijos, ideal para almuerzos al aire libre. A pocos pasos, la pileta completa este oasis privado, rodeado de \u00e1rboles que brindan una sombra refrescante.</SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText15612"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 10
},
{
 "id": "image_uid14B725CF_1BB0_0B7B_41A5_067D022C58BE_1",
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "url": "media/photo_DD86BF4B_CB4B_9F52_41DD_D3D040A97ECA.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "73%",
 "class": "Image",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9117"
 },
 "paddingTop": 0
},
{
 "yaw": -132.67,
 "bleachingDistance": 0.48,
 "bleaching": 0.46,
 "pitch": 14.57,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_CD08745C_C70F_540B_41A3_0E534681CB7E"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E, this.camera_14E1563E_1BB0_091A_419D_DE2FB9E7D665); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.48,
   "hfov": 9.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_1_HS_1_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -4.11
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C597E6ED_C938_86BF_41E8_5B45017AF19E",
   "pitch": -4.11,
   "yaw": 127.48,
   "hfov": 9.97,
   "distance": 100
  }
 ],
 "id": "overlay_CD08645D_C70F_5405_41DC_B3F44E11450C",
 "data": {
  "label": "Arrow 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_DD0C05DD_CB49_8341_41E9_871C0F2C29CE, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.96,
   "hfov": 10.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D8D74B56_CB4B_8771_41E4_85FC4D519FAF",
   "pitch": -6.1,
   "yaw": -16.96,
   "hfov": 10.94,
   "distance": 100
  }
 ],
 "id": "overlay_DD059238_CB58_80DA_41CC_C0D55CE8A8A0",
 "data": {
  "label": "Info Red 02"
 },
 "rollOverDisplay": false
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_DA04024E_CB38_801F_41E9_3D20506FB786",
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C59786ED_C938_86BF_41C2_FDFE324308FF",
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_1_HS_3_0.png",
   "width": 380,
   "height": 480
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_DA05124F_CB38_801D_41E8_B515CBD23B04",
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CB668879_C70F_3C0C_41B3_08B14AE1502E_0_HS_5_0.png",
   "width": 680,
   "height": 1020
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C59F76E8_C938_86A5_41D4_293E2E118E1D",
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_1_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_DA2DCC9B_CB49_8113_41C6_34BC48805B21",
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CD23D4FE_C70F_F407_419E_5895B56D8386_0_HS_3_0.png",
   "width": 680,
   "height": 1020
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C597E6ED_C938_86BF_41E8_5B45017AF19E",
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_1_HS_1_0.png",
   "width": 380,
   "height": 480
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D8D74B56_CB4B_8771_41E4_85FC4D519FAF",
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CD08545C_C70F_540B_41E6_EE1938C09581_0_HS_2_0.png",
   "width": 680,
   "height": 1020
  }
 ]
}],
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "defaultVRPointer": "laser",
 "children": [
  "this.MainViewer",
  "this.Image_DCD89F3C_CFD9_807C_41B5_737653CF36EF",
  "this.IconButton_15A4F332_1BB0_0F25_41B5_5D602CCA8E61"
 ],
 "vrPolyfillScale": 0.9,
 "paddingBottom": 0,
 "start": "this.playAudioList([this.audio_D8660F6C_C8CF_B6EB_41DA_599061733630]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_15A4F332_1BB0_0F25_41B5_5D602CCA8E61], 'cardboardAvailable')",
 "shadow": false,
 "contentOpaque": false,
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "existsKey": function(key){  return key in window; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); }
 },
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarMargin": 2,
 "downloadEnabled": false,
 "propagateClick": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "desktopMipmappingEnabled": false,
 "class": "Player",
 "overflow": "visible",
 "height": "100%",
 "borderSize": 0,
 "minHeight": 20,
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "data": {
  "name": "Player436"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
