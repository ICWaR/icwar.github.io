/*******************************************************************************************************************************/
//                                                  !!! ATTENTION !!!                                                          //
//             __                                                                                              __              //
//            //\\                   THIS IS A VOLATILE FILE. ONLY AUTHORISED                                 //\\             //
//           //  \\                  PERSONNEL FAMILIAR WITH WORKING OF THE SITE SHOULD                      //  \\            //
//          //    \\                 MAKE ANY CHANGES TO THIS FILE.                                         //    \\           //
//         //  ||  \\                                                                                      //  ||  \\          //
//        //   ||   \\                                                                                    //   ||   \\         //
//       //    ||    \\              ANY CHANGES TO THIS FILE WILL DIRECTLY AFFECT THE WEBSITE           //    ||    \\        //
//      //            \\             AND MAY RESULT IN CRASH OR OTHER POSSIBLE SCENARIOS.               //            \\       //
//     //      **      \\                                                                              //      **      \\      //
//    //_ _ _ _ _ _ _ __\\                                                                            //_ _ _ _ _ _ _ __\\     //
//    - -- -- -- -- -- -- -                        !! HANDLE WITH CARE !!                             -- -- -- -- -- -- --     //
//                                                                                                                             //
/*******************************************************************************************************************************/
var constants = {
  'font-size':'1.5rem',
  "font-family":'Sabon-next-lt',
  "dropdown-color":"#d4ac92",
  "dropdown-style":{
    'color':'#040303',
    'background': 'linear-gradient(to bottom,#d05a54 0%,#d4741a 100%)',
    'font-size':'1.5rem',
  }
}

export const configurations = {

  "global-settings":{
    "font-family":constants['font-family'],
    "font-size":constants['font-size']
  },

  "spreeMailUrl":"https://formspree.io/f/xzblzjgk",

  "colorPallete":[
    '#8D8741',
    '#659DBD',
    '#DAAD86',
    '#BC986A',
    '#FBEEC1'
  ],

  "navbar":{
    "navLinksStyle":{
      // 'color':'#c4a32e',
      // 'background-color': ' #dac062',//#b7d8f3e8,
      'background': 'linear-gradient(to bottom, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%)',//'#0b8dd9b9',//#b7d8f3e8,
        // color: #dac062;
  // 'text-shadow': '1px 0px #d0a714',
  // 'background': 'radial-gradient(100% 100% at 50% 50%, #545C6F 0, #3E4452 40%, #ffffff00 50%)'
  'font-size':constants['font-size']//'25px',
      // 'box-shadow':'-10px 0px 10px black'
  },
    'style':{
      'background-color': '#ffffff',//Color behind IISC And ICWaR Logo
      // 'border':'solid 1px black',
      // 'position':'fixed',
      // 'top':'0',
      // 'z-index':'100',
      // 'box-shadow':'11px 2px 10px 10px black',
      // 'min-height': '10vh',
      //'font-size':constants['font-size']//'25px',
    },
    "navMenu":[
      {
        "name":"Home",
        "link":"/"
      },
      {
        "name":"About",
        "hasDropdown":true,
        "dropdownStyle":constants['dropdown-style'],
        "dropdownItems":[
          {
            "name":"History",
            "link":"/about-us",
            "hasSubDropdown":false
          },
          {
            "name":"Program",
            "link":"/program"
          },
          {
            "name":"Infrastructure",
            "link":"/centres-and-facilities"
          },
          {
            'name':'Admissions',
            'link':'/redirect_initiated',
            'redirect':'https://iisc.ac.in/admissions/'
          },{
            'name':"Contact Us",
            'link':'/contact-us'
          }
        ],
      },
      {
        "name":"People",
        "hasDropdown":true,
        "dropdownStyle":constants['dropdown-style'],
        "dropdownItems":[
          {
            "name":"Faculty",
            "link":"/people/faculty",
            "hasSubDropdown":false
          },
          {
            "name":"Visitors",
            "link":"/people/visitors"
          },
          {
            "name":"Research Students",
            "link":"/people/researchStudents"
          },
          {
            "name":"Post Doctoral Scholars",
            "link":"/people/postDoctoralScholars"
          },
          {
            "name":"Project Staff",
            "link":"/people/projectStaff"
          },
          {
            "name":"Office Staff",
            "link":"/people/officeStaff"
          },
        ],
      },
      {
        "name":"Research",
        "link":"/research"
      },
      {
        "name":"Publications",
        "link":"/publications"
      },
      {
        "name":"Activities & Events",
        "hasDropdown":true,
        "dropdownStyle":constants['dropdown-style'],
        "dropdownItems":[
          {
            "name":"Workshops And Short Courses",
            "link":"/events/workshop-and-meetings",
            "hasSubDropdown":true,
            "dropdownStyle":constants['dropdown-style'],
            "subDropdownItems":[
              {
                "name":"Workshops",
                "link":"/events/workshop-and-meetings"
              },
              {
                "name":"Monsoon School",
                "link":"/events/monsoon-school"
              },
              {
                "name":"Seminars",
                "link":"/events/workshop-and-meetings",
              },
              {
                "name":"Meetings",
                "link":"/events/workshop-and-meetings"
              },
              ]
          },
          {
            "name":"Student Seminar Series",
            "link":"/students-corner"
          },
          {
            'name':'Gallery',
            'link':'/gallery',
            "hasSubDropdown":true,
            "subDropdownItems":[
            {
              "name":"Fresher’s Day 2022 – Gallery",
              'link':'/gallery',
            },
            {
              "name":"Open Day: ICWaR",
              'link':'/gallery',
            },
            {
              "name":"Open Day, 2020",
              'link':'/gallery',
            },
            {
              "name":"Open Day, 2019",
              'link':'/gallery',
            }],
          },
          {
            "name":"Outreach",
            "link":"none"
          },
        ],
      },
      {
        "name":"Students Corner",
        "hasDropdown":true,
        "dropdownStyle":constants['dropdown-style'],
        "dropdownItems":[
          {
            "name":"Blogs",
            "link":"/students-blogs"
          },
          {
            "name":"Testimonials",
            "link":"/null"
          }
        ],
      }
    ]
  },
  //Page specific Settings
  "publications":{
    "font-size":"",
  },

  "footer":{
    "style":{
      //  "background-color": "#0e0e0e",
       "background-color": "#08394f",
       "color":"red"
    }
  }
}
