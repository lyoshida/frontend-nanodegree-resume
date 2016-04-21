/* Helper methods */

// Receives a template and a value. It replaces %data% with the passed value.
var data = function(template, value) {
  return template.replace('%data%', value);
}

/* Data */

var bio = {
  "name": "Luis Yoshida",
  "role": "Front-end developer",
  "contacts": {
    "mobile": "55 11 1111-2222",
    "email": "luis.yoshida@gmail.com",
    "github": "lyoshida",
    "location": "São Paulo"
  },
  "welcomeMessage": "Wecome to my online resume",
  "skills": ["html", "css", "javascript", "python", "swift"],
  "biopic": "https://pbs.twimg.com/profile_images/2751424889/b8ef7415cce30cab46667d61108e6130_400x400.png",
  "display": function() {
    $('#header').prepend(data(HTMLheaderName, bio.name));
    $('#name').append(data(HTMLheaderRole, bio.role));
    $('#topContacts, #footerContacts').append(data(HTMLmobile, bio.contacts.mobile))
                     .append(data(HTMLemail, bio.contacts.email))
                     .append(data(HTMLgithub, bio.contacts.github))
                     .append(data(HTMLlocation, bio.contacts.location));

    $('#header').append(data(HTMLbioPic, bio.biopic))
                .append(data(HTMLwelcomeMsg, bio.welcomeMessage))
                .append(HTMLskillsStart);

    $.each(bio.skills, function(index, value) {
      $('#skills').append(data(HTMLskills, value));
    });
  }
};

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Code Reviewer",
      "location": "São Paulo",
      "dates": "2015-2016",
      "description": "Working as a code reviewer and helping students."
    },
    {
      "employer": "Spinnaker Capital",
      "title": "Operations Analyst",
      "location": "São Paulo",
      "dates": "2007-2012",
      "description": "Worked as a operation analyst for a hedge fund based in UK."
    }
  ],
  "display": function() {
    $.each(work.jobs, function(index, job) {
      $('#workExperience').append(HTMLworkStart);
      $('.work-entry:last').append(data(HTMLworkEmployer, job.employer) + data(HTMLworkTitle, job.title));
      $('.work-entry:last').append(data(HTMLworkDates, job.dates))
                      .append(data(HTMLworkLocation, job.location))
                      .append(data(HTMLworkDescription, job.description));
    });
  }
}

var education = {
  "schools": [
      {
          "name": "São Paulo University",
          "location": "São Paulo",
          "degree": "Production Engineering",
          "majors": ["Engineering"],
          "dates": "2002-2007",
          "url": "http://www.poli.usp.br"
      }
  ],
  "onlineCourses": [
      {
          "title": "iOS Developer Nanodegree",
          "school": "Udacity",
          "date": "2016",
          "url": "https://www.udacity.com/course/ios-developer-nanodegree--nd003"
      },
      {
          "title": "Full Stack Developer Nanodegree",
          "school": "Udacity",
          "date": "2015",
          "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
      },
      {
          "title": "Beginning iOS Nanodegree",
          "school": "Udacity",
          "date": "2015",
          "url": "https://www.udacity.com/course/beginning-ios-app-development-nanodegree--nd006"
      }
  ],
  "display": function() {
    $.each(education.schools, function(index, school) {

      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(data(HTMLschoolName, school.name) + data(HTMLschoolDegree, school.degree))
                                .append(data(HTMLschoolDates, school.dates))
                                .append(data(HTMLschoolLocation, school.location))
                                .append(data(HTMLschoolMajor, school.majors));
    });

    $('#education').append(HTMLonlineClasses);
    $.each(education.onlineCourses, function(index, course) {
      $('#education').append(data(HTMLschoolStart, ''));
      $('.education-entry:last').append(data(HTMLonlineTitle, course.title) + data(HTMLonlineSchool, course.school))
                     .append(data(HTMLonlineDates, course.date))
                     .append(data(HTMLonlineURL, course.url));
    });
  }
}

var projects = {
  "projects": [
    {
      "title": "Project 1",
      "dates": "2015",
      "description": "description",
      "images": [

      ]
    }
  ],
  "display": function() {
    $.each(projects.projects, function(index, project) {
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(data(HTMLprojectTitle, project.title))
                         .append(data(HTMLprojectDates, project.dates))
                         .append(data(HTMLprojectDescription, project.description));
      $.each(project.images, function(index, image) {
        $('.project-entry').append(data(HTMLprojectImage, image));
      });

    });
  }
}


bio.display();
education.display();
projects.display();
work.display();
$('#mapDiv').append(googleMap);

