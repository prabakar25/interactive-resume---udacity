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
  	"picture": "images/me.png",
  	"welcomeMessage": "Hiii!!!!! Welcome to have a look at my resume. Thanks for stopping by.",
  	"skills": ["HTML" , "CSS" , "Java Script" , "bootstrap"] 
};

var education = {
   	"schools": [
  		{
  			"name": "Sri Ramakrishna Engineering College",
  			"location": "Coimbatore, Tamilnadu, India",	
  			"degree": "Bachelor of Engineering",
  			"major": "Mechanical Engineering",
  			"date": "2013 - 2017"
  		}
  	],

  	"onlineCourses": [
    	{
  			"title": "Front-end Web Developer Nanodegree",
            "school": "Udacity",
  			"date": "june, 2017 - present",
  			"url": "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
  	   	},
  	 	{
  		 	"title": "Intro to Html and CSS",
            "school": "Udacity",
            "date": "july, 2017",
            "url": "https://classroom.udacity.com/courses/ud304"
  		},
  		{
		    "title": "Responsive Images",
            "school": "Udacity",
            "date": "july, 2017",
  			"url": "https://classroom.udacity.com/courses/ud882"			
  		}
  	]
};

var projects = {
    "projects": [
        {
            "title": "Animal trading cards - Udacity",
            "date": "June, 2017",
            "description": "A simple project using html skills.",
            "image": "images/animaltradingcard.jpg"
        },
        {
            "title": "Portfolio site - Udacity",
            "date": "July, 2017",
            "description": "Portfolio site to display my projects in front end nanodegree.",
            "image": "images/Portfolio.jpg"
        },
        {
            "title": "Interactive Resume - Udacity",
            "date": "August, 2017",
            "description": "Resume created using javascript and template html.",
            "image": "images/resume.jpg"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer": "Amalgamation's Repco private limited",
            "title": "Intern",
            "date": "2017",
            "location": "Chennai, Tamilnadu",
            "description": "Amalgamation's Repco private limited is basically an automobile clutch manufacturing company. I got an opportunity to complete my project in alliance with the company by working there for four months. Cycle time reduction of the cover assembly is my project, by which the time has been reduced around 12.5% per component, which ultimately resulted in the high production rate."
        }
    ]

};


var formattedName = HTMLheaderName.replace("%data%" , bio.name);
var formattedRole = HTMLheaderRole.replace("%data%" , bio.role);

var formattedMobile = HTMLmobile.replace("%data%" , bio.contacts.mobile); 
var formattedEmail = HTMLemail.replace("%data%" , bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%" , bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%" , bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%" , bio.contacts.location);

var formattedPic = HTMLbioPic.replace("%data%" , bio.picture);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%" , bio.welcomeMessage);

bio.display = function() {
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts , #footerContacts").append(formattedMobile);
    $("#topContacts , #footerContacts").append(formattedEmail);
    $("#topContacts , #footerContacts").append(formattedTwitter);
    $("#topContacts , #footerContacts").append(formattedGitHub);
    $("#topContacts , #footerContacts").append(formattedLocation);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcomeMessage);

    if(bio.skills.length > 0 ) {
        $("#header").append(HTMLskillsStart); 
        for (var i in bio.skills) {
            var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
            $("#skills").append(formattedSkills);
        }    
    }    
};
bio.display();
 
projects.display = function() {
    if (projects.projects.length > 0) {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
            $(".project-entry:last").append(formattedDate);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
            $(".project-entry:last").append(formattedImage);
        }
    }    
};
projects.display();

education.display = function() {
    if (education.schools.length > 0) {
        $("#education").append(HTMLschoolStart);
        for (var school in education.schools) {
            var formattedName = HTMLschoolName.replace("%data%" , education.schools[school].name);
            $(".education-entry:last").append(formattedName);

            var formattedDegree = HTMLschoolDegree.replace("%data%" , education.schools[school].degree);
            $(".education-entry:last").append(formattedDegree);

            var formattedDate = HTMLschoolDates.replace("%data%" , education.schools[school].date);
            $(".education-entry:last").append(formattedDate);

            var formattedLocation = HTMLschoolLocation.replace("%data%" , education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace("%data%" , education.schools[school].major);
            $(".education-entry:last").append(formattedMajor);
        }
    }        

    if (education.onlineCourses.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        for(var onlineCourse in education.onlineCourses) {

            var formattedTitle = HTMLonlineTitle.replace("%data%" , education.onlineCourses[onlineCourse].title);
            $(".education-entry:last").append(formattedTitle);

            var formattedSchool = HTMLonlineSchool.replace("%data%" , education.onlineCourses[onlineCourse].school);
            $(".education-entry:last").append(formattedSchool);

            var formattedDates = HTMLonlineDates.replace("%data%" , education.onlineCourses[onlineCourse].date);
            $(".education-entry:last").append(formattedDates);

            var formattedUrl = HTMLonlineURL.replace("%data%" , education.onlineCourses[onlineCourse].url);
            $(".education-entry:last").append(formattedUrl);
        }
    }

};
education.display();

work.display = function() {
    
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);
    
        for (var job in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
            $(".work-entry:last").append(formattedEmployer);

            var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
            $(".work-entry:last").append(formattedTitle);

            var formattedDate = HTMLworkDates.replace("%data%" , work.jobs[job].date);
            $(".work-entry:last").append(formattedDate);

            var formattedLocation = HTMLworkLocation.replace("%data%" , work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
work.display();

 $("#mapDiv").append(googleMap);
