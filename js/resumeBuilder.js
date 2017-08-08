var bio = {
  	"name": "PRABAKARBALAJI",
  	"role": "Front-end Web Developer",
  	"contacts": {
        "mobile": "+91 9976536519",
  		"email": "prabakarbalaji25@gmail.com",
  		"github": "prabakar25",
  		"twitter": "@PRABAKAR_BALAJI",
  		"location": "Tamilnadu, India"
  	},
  	"biopic": "images/me.png",
  	"welcomeMessage": "Hiii!!!!! Welcome to have a look at my resume. Thanks for stopping by.",
  	"skills": ["HTML" , "CSS" , "Java Script" , "bootstrap"] 
};

var education = {
   	"schools": [
  		{
  			"name": "Sri Ramakrishna Engineering College",
  			"location": "Coimbatore, Tamilnadu, India",	
  			"degree": "Bachelor of Engineering",
  			"majors": ["Mechanical Engineering"],
  			"dates": "2013 - 2017"
  		}
  	],

  	"onlineCourses": [
    	{
  			"title": "Front-end Web Developer Nanodegree",
            "school": "Udacity",
  			"dates": "june, 2017 - present",
  			"url": "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
  	   	},
  	 	{
  		 	"title": "Intro to Html and CSS",
            "school": "Udacity",
            "dates": "july, 2017",
            "url": "https://classroom.udacity.com/courses/ud304"
  		},
  		{
		    "title": "Responsive Images",
            "school": "Udacity",
            "dates": "july, 2017",
  			"url": "https://classroom.udacity.com/courses/ud882"			
  		}
  	]
};

var projects = {
    "projects": [
        {
            "title": "Animal trading cards - Udacity",
            "dates": "June, 2017",
            "description": "A simple project using html skills.",
            "images": ["images/animaltradingcard.jpg"]
        },
        {
            "title": "Portfolio site - Udacity",
            "dates": "July, 2017",
            "description": "Portfolio site to display my projects in front end nanodegree.",
            "images": ["images/Portfolio.jpg"]
        },
        {
            "title": "Interactive Resume - Udacity",
            "dates": "August, 2017",
            "description": "Resume created using javascript and template html.",
            "images": ["images/resume.jpg"]
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer": "Amalgamation's Repco private limited",
            "title": "Intern",
            "dates": "2017",
            "location": "Chennai, Tamilnadu",
            "description": "Amalgamation's Repco private limited is basically an automobile clutch manufacturing company. I got an opportunity to complete my project in alliance with the company by working there for four months. Cycle time reduction of the cover assembly is my project, by which the time has been reduced around 12.5% per component, which ultimately resulted in the high production rate."
        }
    ]

};


var formattedName = HTMLheaderName.replace( "%data%" , bio.name );
var formattedRole = HTMLheaderRole.replace( "%data%" , bio.role );

var formattedMobile = HTMLmobile.replace( "%data%" , bio.contacts.mobile ); 
var formattedEmail = HTMLemail.replace( "%data%" , bio.contacts.email );
var formattedTwitter = HTMLtwitter.replace( "%data%" , bio.contacts.twitter );
var formattedGitHub = HTMLgithub.replace( "%data%" , bio.contacts.github );
var formattedLocation = HTMLlocation.replace( "%data%" , bio.contacts.location );

var formattedPic = HTMLbioPic.replace( "%data%" , bio.biopic );
var formattedWelcomeMessage = HTMLwelcomeMsg.replace( "%data%" , bio.welcomeMessage );

bio.display = function() {
    $( "#header" ).prepend( formattedRole );
    $( "#header" ).prepend( formattedName );
    $( "#topContacts , #footerContacts" ).append( formattedMobile ,formattedEmail , formattedTwitter , formattedGitHub , formattedLocation );
    $( "#header" ).append( formattedPic );
    $( "#header" ).append( formattedWelcomeMessage );

    if( bio.skills.length > 0  ) {
        $( "#header" ).append( HTMLskillsStart ); 
       
        bio.skills.forEach( function( skill ) {
            var formattedSkills = HTMLskills.replace( "%data%", skill );
            $( "#skills" ).append( formattedSkills );
        });    
    }   
};
bio.display();
 
projects.display = function() {
    if ( projects.projects.length > 0 ) {
        $( "#projects" ).append( HTMLprojectStart );
        
        projects.projects.forEach( function( project ) {
            var formattedTitle = HTMLprojectTitle.replace( "%data%", project.title );
            $( ".project-entry:last" ).append( formattedTitle );

            var formattedDate = HTMLprojectDates.replace( "%data%", project.dates );
            $( ".project-entry:last" ).append( formattedDate );

            var formattedDescription = HTMLprojectDescription.replace( "%data%", project.description );
            $( ".project-entry:last" ).append( formattedDescription );

            for ( var image = 0 ; image < project.images.length ; image++ ) {
                var formattedImage = HTMLprojectImage.replace( "%data%", project.images[image] );
                $( ".project-entry:last" ).append( formattedImage );
            } 
         });
    }    
};
projects.display();

education.display = function() {
    if ( education.schools.length > 0 ) {
        $( "#education" ).append( HTMLschoolStart );
        
        education.schools.forEach( function( school ) {
            var formattedName = HTMLschoolName.replace( "%data%" , school.name );
            $( ".education-entry:last" ).append( formattedName );

            var formattedDegree = HTMLschoolDegree.replace( "%data%" , school.degree );
            $( ".education-entry:last" ).append( formattedDegree );

            var formattedDate = HTMLschoolDates.replace( "%data%" , school.dates );
            $( ".education-entry:last" ).append( formattedDate );

            var formattedLocation = HTMLschoolLocation.replace( "%data%" , school.location );
            $( ".education-entry:last" ).append( formattedLocation );

            for ( var major = 0 ; major < school.majors.length ; major++ ) {
                var formattedMajor = HTMLschoolMajor.replace( "%data%" ,  school.majors[major] );
                $( ".education-entry:last" ).append( formattedMajor );
            }    
        });
    }        

    if ( education.onlineCourses.length > 0 ) {
        $( ".education-entry" ).append( HTMLonlineClasses );
        
        education.onlineCourses.forEach(function(onlineCourse) {
            var formattedTitle = HTMLonlineTitle.replace( "%data%" , onlineCourse.title );
            $( ".education-entry:last" ).append( formattedTitle );

            var formattedSchool = HTMLonlineSchool.replace( "%data%" , onlineCourse.school );
            $( ".education-entry:last" ).append( formattedSchool );

            var formattedDates = HTMLonlineDates.replace( "%data%" , onlineCourse.dates );
            $( ".education-entry:last" ).append( formattedDates );

            var formattedUrl = HTMLonlineURL.replace( "%data%" , onlineCourse.url );
            $( ".education-entry:last" ).append( formattedUrl );
        });
    }

};
education.display();

work.display = function() {
    
    if ( work.jobs.length > 0 ) {
        $( "#workExperience" ).append( HTMLworkStart );
    
        work.jobs.forEach(function(job) {
            var formattedEmployer = HTMLworkEmployer.replace( "%data%" , job.employer );
            $( ".work-entry:last" ).append( formattedEmployer );

            var formattedTitle = HTMLworkTitle.replace( "%data%" , job.title );
            $( ".work-entry:last" ).append( formattedTitle );

            var formattedDate = HTMLworkDates.replace( "%data%" , job.dates );
            $( ".work-entry:last" ).append( formattedDate );

            var formattedLocation = HTMLworkLocation.replace( "%data%" , job.location );
            $( ".work-entry:last" ).append( formattedLocation );

            var formattedDescription = HTMLworkDescription.replace( "%data%" , job.description );
            $( ".work-entry:last" ).append( formattedDescription );
        });
    }
};
work.display();

$( "#mapDiv" ).append( googleMap );
