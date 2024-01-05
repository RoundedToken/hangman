export function createSvg() {
    const svgContainer = document.createElement('div');

    svgContainer.innerHTML = `        <svg version="1.1" id="hangman"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="250px" height="350px" viewBox="0 0 250 350" enable-background="new 0 0 250 350" xml:space="preserve">
  <g id="niteSky">

    <linearGradient id="grayyyy" gradientUnits="userSpaceOnUse" x1="123.6147" y1="282.6143" x2="126.2841" y2="79.7452">
      <stop  offset="0" style="stop-color:#CCCECF"/>
      <stop  offset="1" style="stop-color:#919394"/>
    </linearGradient>
    <rect id="grayyyy" x="0.667" fill="url(#grayyyy)" width="249.333" height="349.5"/>
  </g><!--end nite sky-->

  <g id="skyBlue">

   <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="123.6147" y1="282.6143" x2="126.2841" y2="79.7452">
     <stop  offset="0" style="stop-color:#C1E8FB"/>
     <stop  offset="1" style="stop-color:#7BCAF1"/><!--darker top of sky-->
   </linearGradient>
   <rect x="0.667" fill="url(#SVGID_1_)" width="249.333" height="304"/>
   <g>
     <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="53.6851" y1="285.9375" x2="53.902" y2="269.4509">
       <stop  offset="0.0049" style="stop-color:#9ACA3C"/>
       <stop  offset="1" style="stop-color:#B7D669"/>
     </linearGradient>
     <path fill="url(#SVGID_2_)" d="M0,262.334c4.333-0.667,26,0.999,33,1.666c4.622,0.44,67,15,74.667,23
       C91.333,290.334,3.333,285.334,0,285.667C0,282.667,0,262.334,0,262.334z"/>
     <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="27.2705" y1="279.8096" x2="27.4295" y2="267.7288">
       <stop  offset="0" style="stop-color:#DBD34E"/>
       <stop  offset="0.9951" style="stop-color:#F0DF36"/>
     </linearGradient>
     <path fill="url(#SVGID_3_)" d="M17.25,262.75c0.801,0,2,0.25,2.75,0.25c5.25,2.75,15.625,12.375,17.5,18
       c-4.125,0.375-8.5,0.25-10,0C26.75,278.25,24.5,273,17.25,262.75z"/>
   </g>
   <g>
     <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="124.7373" y1="323.4355" x2="125.2254" y2="286.3408">
       <stop  offset="0" style="stop-color:#197833"/>
       <stop  offset="0.9951" style="stop-color:#7CBE40"/>
     </linearGradient>
     <path fill="url(#SVGID_4_)" d="M250,285c-9-2-22.443-10.441-32.5-11.5c-57-6-105.5,15-126.5,12.5s-75-10.5-91-5c0,7.5,0,45,0,45
       h250V285z"/>
     <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="101.019" y1="305.6377" x2="101.2133" y2="290.874">
       <stop  offset="0" style="stop-color:#CDCF51"/>
       <stop  offset="0.9951" style="stop-color:#E7DC4E"/>
     </linearGradient>
     <path fill="url(#SVGID_5_)" d="M120.667,304c-5.333-5.333-25.333-16.708-32.667-18.375c-1.583-0.084-4.25-0.553-6.333-0.93
       c10,6.044,18.667,18.306,21,22.639C111,307.001,117,303.333,120.667,304z"/>
   </g>
   <g>
     <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="124.7388" y1="347.3428" x2="125.2375" y2="309.4369">
       <stop  offset="0" style="stop-color:#347530"/>
       <stop  offset="0.9951" style="stop-color:#88C540"/>
     </linearGradient>
     <path fill="url(#SVGID_6_)" d="M250,299.333c-9-2-56.389-4.213-66.5-4.333c-42-0.5-99,17.5-120,15S16,299.5,0,305c0,7.5,0,45,0,45
       h250V299.333z"/>
     <linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="182.2197" y1="346.2637" x2="182.6849" y2="310.9112">
       <stop  offset="0" style="stop-color:#F99D20"/>
       <stop  offset="0.9951" style="stop-color:#FEE65B"/>
     </linearGradient>
     <path fill="url(#SVGID_7_)" d="M228.5,350c-18.5-3-47-16-49-24.5s2.744-15.355,0-20.5c-4-7.5-21.074-9.872-29.5-8
       c-4.5,1-9.5,2-13.5,3c7,3.5,17.547-0.035,21.5,9c3.5,8-12.5,13-9.5,26.5c1.844,8.298,9.5,10.5,13,14.5
       C167.5,350,228.5,350,228.5,350z"/>
   </g>
   <path fill="none" d="M173.688,120.753c-18.004,8.964,8.862,20.234-1.051,30.309c-3.853,3.916-8.991-1.706-10.737,7.204
     c-1.133,5.786,2.677,9.354,5.781,13.493c3.939,5.251,4.93,9.099,11.068,3.235c5.399-5.158,4.801-13.362,2.001-19.542
     c7.104-1.121,11.236,3.743,13.92,8.892c1.688,3.242,0.647,5.767,4.188,8.14c2.087,1.398,6.531,0.729,9.141,2.267
     c6.048-2.752,9.218-2.595,9.944-10.419c0.326-3.514-6.437-12.739-3.331-15.261c4.348-3.533,8.257,5.813,9.347,8.239
     c12.813-8.712-15.357-16.292-19.207-19.394C194.566,129.71,190.044,112.61,173.688,120.753z"/>
   <path fill="#FFFFFF" d="M124.951,134.162c4.151,2.841,7.844-3.549,12.283-3.881c4.145-0.312,10.882,3.36,10.745-3.433
     c3.14-0.852,7.378,0.597,10.104-0.417c4.286-1.593,2.261-3.151,3.32-6.039c2.221-6.057,5.878-5.725,10.977-1.244
     c2.68,2.355,0.164,3.446,5.427,3.667c2.856,0.119,5.789-2.894,8.806-1.681c3.63,1.46,0.837,4.745,3.241,6.52
     c2.087,1.541,6.206,0.707,8.817,2.433c1.364,0.902,0.739,2.981,2.631,3.824c1.738,0.775,3.47-0.458,5.16-0.204
     c3.042,0.458,6.006,1.501,9.135,1.821c1.669,6.766-13.59,4.142-17.972,4.35c-2.836,7.847-11.129-2.931-15.341-0.713
     c-3.263,1.718,0.195,4.818-4.896,4.977c-3.292,0.103-3.405-3.371-7.643-2.885c-2.712,0.311-3.811,3.581-7.16,3.769
     c-3.367,0.189-5.25-1.999-8.797-2.155c-3.563-0.156-5.375,0.5-8.769-0.016c-3.486-0.531-4.111-1.04-8.544,0.068
     c-3.047,0.762-6.327,2.97-10.335,1.54c-2.705-0.965-6.795-5.116-4.926-6.829L124.951,134.162z"/>
   <path fill="#FFFFFF" d="M240.228,223.857c2.362-1.757,5.193-2.158,7.464-0.891c4.331-14.931-9.746-6.261-9.907-18.719
     c-7.046-10.661-2.3,14.885-9.137,12.541c-4.38-1.5-0.972-7.785-6.396-4.447c-2.68,1.648-2.203,6.057-6.502,5.887
     c-1.851-8.174-3.975-27.012-11.564-15.049c-2.031,3.203-1.326,11.335-3.248,13.317c-3.141,3.239-5.965-5.351-8.583-5.403
     c-1.407-0.028-0.972,5.198-2.79,5.051c-2.802-0.225-2.445-2.331-4.213-4.83c-2.08-2.94-2.951-7.559-6.035-8.779
     c-8.368-3.312-7.741,12.529-14.242,13.894c-1.493,0.313-2.279-3.438-4.448-2.377c-1.521,0.745-1.317,4.616-2.685,5.63
     c-3.275,2.43-6.598,1.578-9.352-3.031c-1.865,3.872-4.73,6.795-6.211,11.02c-1.935,0.059-2.281,1.164-3.752,2.508
     c5.402,7.121,15.717-1.502,21.602,1.479c1.244,0.631,0.929,5,2.564,5.561c2.031,0.697,2.684-1.535,4.432-2.352
     c3.746-1.746,5.059-4.188,9.25-1.109c1.838,1.35,1.355,4.721,3.75,5.098c2.699,0.426,3.084-3.605,4.689-4.127
     c3.975-1.287,5.075,3.299,8.838,3.688c3.089,0.318,6.473-4.666,9.666-4.305c3.734,0.42,6.526,5.127,10.365,5.523
     c4.199,0.434,7.91-2.545,12.047-3.064c3.889-0.488,6.893,1.434,10.619-3.232L240.228,223.857z"/>
 
  </g><!--end happy landscape-->
  <!--****************
  begin nite-sky
****************-->

  <line id="base1" fill="none" stroke="#000000" stroke-width="10" stroke-miterlimit="10" x1="28" y1="326.034" x2="219" y2="326.034"/>
  <line id="base2" fill="none" stroke="#000000" stroke-width="8.6093" stroke-miterlimit="10" x1="171.5" y1="30" x2="171.5" y2="324"/>
  <line id="base3" fill="none" stroke="#000000" stroke-width="8" stroke-miterlimit="10" x1="70.5" y1="34.173" x2="173.5" y2="34.173"/>
  <line id="base4" fill="none" stroke="#000000" stroke-width="4.505" stroke-miterlimit="10" x1="72.797" y1="59.357" x2="72.797" y2="35.336"/>

  <g id="man">

      <g id="base5"><!-- this is the mans face-->
              <path id="happy1_1_" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M97.201,82.503
                  c1.314,22.317-10.13,38.146-23.467,38.001c-10.005-0.109-24.204-14.328-24.185-36.664c0.006-7.731,10.014-23.063,23.699-22.835
                  C89.567,61.275,96.746,74.784,97.201,82.503z"/>
              <g id="eye1_1_">

                      <ellipse transform="matrix(0.9055 -0.4244 0.4244 0.9055 -28.5286 34.7614)" fill="#FFFFFF" stroke="#000000" stroke-width="2.5082" stroke-miterlimit="10" cx="63.769" cy="81.422" rx="8.082" ry="8.5"/>
                  <ellipse transform="matrix(0.9055 -0.4245 0.4245 0.9055 -28.5309 34.765)" cx="63.768" cy="81.423" rx="2.012" ry="2.468"/>
              </g>
              <g id="eye2_1_">

                      <ellipse transform="matrix(0.9055 -0.4244 0.4244 0.9055 -26.9988 40.5386)" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="77.501" cy="80.876" rx="9.667" ry="10.167"/>
                  <ellipse transform="matrix(0.9054 -0.4245 0.4245 0.9054 -27.0009 40.5437)" cx="77.5" cy="80.875" rx="2.407" ry="2.952"/>
              </g>

                    <path d="M60.848,105.121c0.504-1.196,1.583-2.175,2.597-3.033c1.048-0.857,2.18-1.594,3.36-2.237
                        c2.363-1.286,4.941-2.193,7.727-2.618c1.394-0.206,2.848-0.268,4.343-0.126c1.49,0.147,3.043,0.505,4.511,1.258
                        c1.461,0.739,2.814,1.947,3.592,3.468c0.786,1.522,0.965,3.223,0.803,4.823c-0.464-1.205-1.037-2.33-1.798-3.227
                        c-0.757-0.901-1.682-1.539-2.701-1.952c-2.043-0.823-4.472-0.889-6.983-0.685c-2.515,0.216-5.14,0.677-7.785,1.333
                        c-1.322,0.329-2.653,0.703-3.97,1.155c-0.651,0.233-1.312,0.474-1.939,0.769C61.976,104.339,61.345,104.659,60.848,105.121z"/>

      </g><!--end base5-->
      <path id="base6" fill="none" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M73.733,120.504
          c2.231,6.518,5.267,22.163,3.6,32.496c-1.554,9.634-1.231,15.06-5,21.56"/>

            <path id="base7" d="M75.065,130.611c-2.748,0.216-7.625,0.003-13.268-1.197c-5.647-1.194-12.057-3.245-17.699-6.816
                c-2.746-1.925-4.967-4.29-6.758-6.628c-1.802-2.339-3.227-4.642-4.368-6.665c-2.25-4.065-3.493-6.958-3.382-7.609
                c0.755,0.225,2.689,3.042,5.422,6.985c1.384,1.957,2.989,4.193,4.915,6.367c1.928,2.155,4.167,4.3,6.78,5.787
                c0.616,0.404,1.385,0.699,2.076,1.052c0.716,0.328,1.402,0.708,2.137,0.996c0.735,0.286,1.468,0.571,2.196,0.854l1.089,0.423
                c0.372,0.117,0.741,0.233,1.109,0.349c1.47,0.472,2.91,0.938,4.342,1.259c0.711,0.178,1.409,0.353,2.093,0.523
                c0.692,0.13,1.37,0.257,2.03,0.381c0.661,0.116,1.302,0.263,1.928,0.345c0.627,0.077,1.234,0.151,1.819,0.222
                c0.585,0.064,1.148,0.158,1.685,0.188c0.537,0.025,1.048,0.048,1.533,0.071c0.484,0.022,0.942,0.042,1.37,0.062
                c0.424-0.001,0.811-0.037,1.171-0.052c0.716-0.043,1.308-0.079,1.753-0.106C74.664,128.338,74.586,129.756,75.065,130.611z"/>


            <path id="base8" d="M76.791,127.418c2.232,0.218,6.497,0.305,11.459-0.534c4.944-0.822,10.628-2.68,15.177-5.905
                c4.604-3.196,8.202-7.399,10.665-10.737c2.497-3.362,3.817-5.859,4.319-6.221c0.405,0.705-0.514,3.883-2.889,7.796
                c-2.363,3.904-6.216,8.679-11.433,12.199c-5.229,3.551-11.484,5.361-16.645,6.106c-5.191,0.753-9.331,0.568-11.171,0.479
                C76.842,129.719,77.054,128.318,76.791,127.418z"/>


         <path id="base9" d="M74.188,174.161c-2.884,5.522-9.027,17.557-16.091,30.819c-3.535,6.629-7.295,13.566-11.034,20.128
             c-1.871,3.281-3.735,6.468-5.594,9.464c-0.931,1.498-1.862,2.946-2.818,4.328c-0.48,0.691-0.962,1.365-1.486,2.02
             c-0.261,0.327-0.532,0.648-0.84,0.97c-0.162,0.163-0.311,0.317-0.545,0.494c-0.247,0.199-0.53,0.329-0.822,0.43
             c-2.525,0.6-4.865,1.155-6.97,1.655c-2.081,0.483-3.941,0.872-5.512,1.262c-3.148,0.738-5.195,1.113-5.754,1.003
             c0.459-0.436,2.401-1.249,5.45-2.342c1.515-0.565,3.348-1.112,5.402-1.74c2.027-0.599,4.276-1.264,6.702-1.979
             c0.042-0.015,0.078-0.043,0.108-0.073c0.065-0.075,0.185-0.175,0.293-0.313c0.224-0.254,0.46-0.558,0.689-0.876
             c0.462-0.636,0.923-1.324,1.377-2.039c0.914-1.427,1.821-2.953,2.739-4.525c1.833-3.15,3.702-6.51,5.59-9.954
             c3.773-6.891,7.617-14.125,11.197-20.928c7.155-13.607,13.245-25.496,15.272-29.686C71.976,173.459,73.11,174.344,74.188,174.161
             z"/>


            <path id="base10" d="M74.167,173.943c4.141,7.45,15.448,27.067,25.586,45.385c2.544,4.57,5.031,9.053,7.249,13.303
                c1.113,2.117,2.185,4.156,3.201,6.088c0.502,0.969,0.991,1.91,1.464,2.82l0.05,0.111c0.036,0.035,0.096,0.07,0.143,0.105
                c0.191,0.129,0.381,0.258,0.569,0.383c0.389,0.268,0.775,0.527,1.189,0.758c3.228,1.914,6.099,3.375,8.164,4.51
                c2.076,1.125,3.383,1.904,3.675,2.273c-0.546,0.043-2.137-0.418-4.513-1.316c-2.375-0.924-5.536-2.17-9.177-4.16
                c-0.51-0.309-1.029-0.621-1.558-0.941c-0.104-0.037-0.167-0.139-0.222-0.252l-0.181-0.32l-0.242-0.42
                c-0.132-0.23-0.266-0.461-0.401-0.693c-0.536-0.932-1.089-1.893-1.657-2.879c-1.124-1.977-2.307-4.059-3.531-6.213
                c-2.401-4.322-5.116-8.912-7.771-13.586c-10.665-18.697-21.841-38.367-25.056-43.764
                C72.361,175.398,73.718,174.924,74.167,173.943z"/>

  </g><!--end man group-->
  <g id="happy">
      <path id="happy2" fill="none" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M81.167,215.667
          c-4.102,7.518-8.666,38.107,2.333,52.667"/>
      <g id="happy3">
          <g>
              <g>
                  <path d="M78.277,225.281c-3.559,0.312-9.486-1.455-15.086-5.576c-1.402-1.029-2.817-2.166-4.139-3.504
                      c-0.66-0.67-1.316-1.364-1.922-2.137c-0.615-0.768-1.19-1.551-1.708-2.586c-0.878-1.982-1.202-3.979-1.382-5.935
                      c-0.174-1.96-0.19-3.897-0.14-5.803c0.257-7.611,1.402-14.723,2.248-20.11c0.452-2.681,0.833-4.938,1.114-6.604
                      c0.299-1.657,0.464-2.718,0.678-3.031c0.27,0.333,0.5,1.551,0.52,3.386c0.028,1.835-0.114,4.289-0.35,7.16
                      c-0.434,5.732-1.382,13.195-1.342,20.728c0.029,1.872,0.12,3.756,0.415,5.53c0.152,0.882,0.336,1.749,0.611,2.526
                      c0.14,0.381,0.285,0.764,0.467,1.083c0.099,0.162,0.161,0.315,0.283,0.488l0.37,0.52c2.048,2.759,4.801,5.021,7.398,6.715
                      c2.615,1.711,5.178,2.867,7.307,3.44c2.135,0.606,3.779,0.593,4.72,0.498C77.931,223,77.704,224.426,78.277,225.281z"/>
              </g>
          </g>
      </g>
      <g id="happy4">
          <g>
              <g>
                  <path d="M79.696,224.58c0.634,0.274,0.956,0.564,1.31,0.848c0.349,0.289,0.67,0.585,1.007,0.892
                      c0.671,0.613,1.39,1.274,2.216,1.926c1.638,1.311,3.728,2.579,6.251,3.253c2.516,0.683,5.434,0.691,8.367,0.057
                      c2.936-0.617,5.89-1.836,8.647-3.269c5.538-2.892,10.339-6.686,13.95-9.584c3.6-2.925,6.103-4.965,6.794-4.957
                      c-0.109,0.752-2.281,3.405-5.86,6.878c-3.589,3.434-8.638,7.679-14.716,10.804l-1.142,0.58l-1.18,0.52
                      c-0.778,0.363-1.587,0.667-2.403,0.95c-1.611,0.604-3.302,1.051-4.998,1.317c-3.391,0.563-6.864,0.247-9.739-0.8
                      c-2.895-1.021-5.127-2.65-6.76-4.016c-0.779-0.677-1.471-1.277-2.059-1.789c-0.274-0.232-0.518-0.425-0.692-0.538
                      c-0.15-0.111-0.282-0.102,0.008-0.052c-0.089-0.222-0.042-0.519,0.119-0.737c0.139-0.238,0.314-0.48,0.477-0.723
                      C79.609,225.659,79.896,225.143,79.696,224.58z"/>
              </g>
          </g>
      </g>
      <g id="happy5">
          <g>
              <g>
                  <path d="M83.89,268.624c-0.628,2.025-1.507,4.864-2.538,8.415c-0.53,1.763-1.054,3.688-1.703,5.722
                      c-0.645,2.034-1.329,4.192-2.042,6.444c-0.665,2.265-1.586,4.563-2.443,6.945c-0.438,1.189-0.881,2.395-1.329,3.611
                      l-0.337,0.914c-0.028,0.079-0.025,0.046-0.029,0.08l0.026,0.039c0.02,0.027-0.01-0.009,0.083,0.103
                      c0.181,0.226,0.374,0.443,0.578,0.653c1.611,1.699,3.78,2.965,6.117,3.889c2.341,0.934,4.861,1.536,7.388,1.981
                      c5.073,0.877,10.195,1.089,14.984,1.315c1.204,0.063,2.386,0.126,3.542,0.188c0.583,0.045,1.16,0.089,1.729,0.133
                      c0.287,0.029,0.572,0.058,0.855,0.086l0.435,0.052l0.666,0.092c0.881,0.134,1.718,0.327,2.344,0.612
                      c0.624,0.289,1.056,0.618,1.367,1.068c0.154,0.225,0.261,0.519,0.274,0.831c0.007,0.154-0.003,0.314-0.043,0.463
                      c-0.024,0.067-0.025,0.168-0.067,0.206l-0.161,0.096c-0.433,0.247-0.858,0.489-1.274,0.727l-0.314,0.172l-0.54,0.161
                      c-0.357,0.104-0.711,0.208-1.062,0.311c-0.521,0.155-1.03,0.308-1.528,0.456c-0.824,0.283-1.61,0.554-2.353,0.809
                      c-1.482,0.541-2.794,1.021-3.907,1.427c-2.229,0.815-3.681,1.301-4.154,1.281c0.329-0.441,1.729-1.353,3.994-2.545
                      c1.131-0.6,2.482-1.262,4.037-1.955c0.786-0.333,1.594-0.718,2.494-1.041c0.147-0.055,0.121-0.05,0.171-0.071l0.101-0.046
                      l0.19-0.089c0.112-0.045,0.227-0.09,0.343-0.137c0.051-0.023,0.108-0.036,0.146-0.065c0.007-0.064-0.005-0.135-0.049-0.193
                      c-0.091-0.117-0.249-0.158-0.38-0.187c-0.136-0.028-0.265-0.039-0.383-0.045l-0.178-0.005c-0.268-0.02-0.537-0.039-0.808-0.059
                      c-2.227-0.133-4.645-0.144-7.152-0.2c-5.018-0.116-10.459-0.305-15.95-1.412c-2.738-0.56-5.497-1.365-8.098-2.664
                      c-1.293-0.66-2.554-1.43-3.688-2.387c-0.575-0.467-1.103-0.996-1.609-1.54l-0.363-0.426l-0.246-0.3l-0.292-0.389l-0.586-0.785
                      l-0.073-0.098l0.042-0.118l0.084-0.235l0.168-0.472c0.946-2.606,1.874-5.163,2.771-7.635c0.894-2.313,1.568-4.627,2.26-6.805
                      c0.676-2.186,1.355-4.238,1.917-6.179c0.56-1.94,1.077-3.733,1.542-5.346c0.941-3.259,1.672-5.786,2.115-7.319
                      C81.607,268.267,82.878,268.947,83.89,268.624z"/>
              </g>
          </g>
      </g>
      <g id="happy6">
          <g>
              <g>
                  <path d="M83.119,266.13c3.646,0.559,10.3,1.522,18.255,2.972c3.977,0.739,8.275,1.575,12.684,2.748
                      c0.551,0.137,1.105,0.308,1.661,0.479c0.556,0.177,1.108,0.317,1.674,0.544l0.986,0.366l0.735,0.273
                      c0.03,0.013,0.063,0.021,0.09,0.036l0.042,0.092l0.083,0.184l0.165,0.366c0.254,0.559,0.368,0.819,0.504,1.146l0.239,0.947
                      c0.55,2.519,0.436,4.85,0.384,7.132c-0.176,4.547-0.475,8.886-0.142,12.876c0.042,1.004,0.223,1.958,0.326,2.909
                      c0.193,0.926,0.327,1.853,0.579,2.713c0.255,0.859,0.462,1.716,0.81,2.483l0.231,0.583l0.123,0.336
                      c0.146,0.132,0.246,0.184,0.556,0.268c0.573,0.12,1.261,0.025,1.907-0.177c0.65-0.196,1.271-0.477,1.846-0.773
                      c1.152-0.604,2.137-1.261,2.961-1.833c1.648-1.154,2.681-1.959,3.094-2.061c-0.112,0.477-0.947,1.663-2.566,3.206
                      c-0.817,0.763-1.823,1.624-3.145,2.423c-0.665,0.394-1.412,0.774-2.311,1.038c-0.459,0.115-0.944,0.226-1.498,0.219
                      c-0.544-0.012-1.123-0.066-1.837-0.434l-0.486-0.28l-0.123-0.071c-0.029-0.033-0.042-0.079-0.064-0.118l-0.12-0.246
                      c-0.129-0.27-0.26-0.542-0.392-0.816c-0.2-0.432-0.403-0.87-0.609-1.316c-0.3-0.925-0.698-1.867-0.929-2.868
                      c-0.554-1.991-0.842-4.127-1.046-6.327c-0.353-4.396-0.033-9.069-0.014-13.59c-0.007-1.124-0.038-2.244-0.175-3.289l-0.105-0.78
                      c-0.042-0.254-0.121-0.477-0.176-0.716c-0.076-0.479-0.378-1.009-0.292-0.862l-0.904-0.327
                      c-0.517-0.175-1.064-0.321-1.592-0.483c-1.062-0.318-2.163-0.574-3.236-0.848c-4.34-1.021-8.596-1.812-12.451-2.489
                      c-7.718-1.341-13.881-2.198-16.549-2.504C83.114,268.44,83.54,267.074,83.119,266.13z"/>
              </g>
          </g>
      </g>
      <g id="happy7">
          <path id="happy1" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M117.314,188.834
              c-8.281,20.766-25.362,30.241-37.377,24.449c-9.013-4.344-15.835-23.244-6.339-43.461c3.287-6.999,18.855-16.633,31.15-10.62
              C119.411,166.374,120.178,181.652,117.314,188.834z"/>
          <g id="eye1">

                  <ellipse fill="#FFFFFF" stroke="#000000" stroke-width="2.5082" stroke-miterlimit="10" cx="87.501" cy="173.667" rx="8.082" ry="8.5"/>
              <ellipse cx="87.5" cy="173.667" rx="2.012" ry="2.468"/>
          </g>
          <g id="eye2">

                  <ellipse fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="100.167" cy="179" rx="9.667" ry="10.167"/>
              <ellipse cx="100.166" cy="179" rx="2.406" ry="2.953"/>
          </g>
          <g>
              <g>
                  <g>
                      <path d="M76.616,184.989c0.537,3.09,1.521,5.89,2.636,8.527c1.142,2.608,2.522,5.073,4.363,6.845
                          c1.82,1.793,4.161,2.64,7.087,2.354c2.913-0.277,6.097-1.537,9.396-3.142c-1.897,2.203-4.242,4.231-7.278,5.541
                          c-1.523,0.621-3.248,1.042-5.089,0.955c-1.834-0.074-3.733-0.727-5.272-1.828c-1.558-1.091-2.739-2.562-3.62-4.111
                          c-0.885-1.558-1.493-3.215-1.91-4.896C76.123,191.871,75.967,188.372,76.616,184.989z"/>
                  </g>
              </g>
          </g>
      </g>
  </g><!--end happy group-->



</svg>`;

    return svgContainer;
}
