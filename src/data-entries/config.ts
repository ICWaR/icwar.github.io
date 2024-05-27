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
  'font-size':'1.5rem !important',
  "font-family":'Sabon-next-lt',
  "dropdown-color":"#d4ac92",
  "dropdown-style":{
    'color':'#c01919',
    'background': '#721816',
    'font-size':'1.5rem',
  }
}

export const configurations = {

  "global-settings":{
    "font-family":constants['font-family'],
    "font-size":constants['font-size'],
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
      'background':'#084c61',
      'font-size':constants['font-size'],
      // 'box-shadow':' 1px 1px 5px black'
  },
    'style':{
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
            'link':'/redirect',
            'redirect':'https://iisc.ac.in/admissions/',
          },
          {
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
            "name":"Former Faculty",
            "link":"/people/formerFaculty"
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
                "link":"/events/workshop-and-meetings/workshops"
              },
              {
                "name":"Monsoon School",
                "link":"/events/monsoon-school"
              },
              {
                "name":"Seminars",
                "link":"/events/workshop-and-meetings/seminars",
              },
              ]
          },
          {
            "name":"Student Seminar Series",
            "link":"/students-seminar"
          },
          {
            'name':'Gallery',
            'link':'/gallery'
          },
          {
            "name":"Outreach",
            "link":"/outreach"
          },
          {
            "name":"Media Coverage",
            "link":"/media-coverage"
          }
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
            "link":"/testimonials"
          }
        ],
      }
    ]
  },
  //Page specific Settings
  "publications":{

  },


  "footer":{
    "style":{
       "background-color": "#084c61",
       "color":"red"
    }
  }
}
