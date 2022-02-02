# The Quiz

Corvus Consulting Ltd is a management consultancy company. This is an itinial concept website consisting of three accessible pages, and one page accessible on sign-up for a monthly newsletter. The website will allow potential customers to find the company online, see a brief introduction of what the company offers and testamonials, and sign up for a newsletter.

When viewers sign up for the newsletter, they are added to a CRM list, which means the company can ultimately engage in two-way communication with them.  Each page also contains links to email and the company's LinkedIn page in the footer.  The ultimate goal of the website is to give just enough information to tweak the interest of potential clients and get them to initiate and allow two-way communication in some form. 

![Responsice Mockup](assets/media/mockup.png)

## Features 

The following features are included in the website.  Ultimately they aim to make it easy to get around the site, and to allow the user to always know where they are.

### Existing Features

- __Navigation Bar__

  - All pages contain a fully responsive navigation bar, including links to the Logo, Home page, Solutions and Resources pages. This is identical on each page to allow for easy navigation and avoid confusion.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 
  - The current page is clearly highlighted for the user to know where they are. The only exception to this is the 'confirmation' page on sign-up to the newsletter as this page exists outside the standard menu system (to ensure it is only visable after sign-up).  The navigation bar is present in full, but now pages are highlighted on it as active.

![Nav Bar](assets/media/navbar.png)

- __The landing page hero-image__

  - The landing includes a design picture with text overlay to clearly show that the website is for a Management Consulting services company. 
  - The picture expands to fill the screen to draw the viewers attention to it. The animation livens up the page, and helps to put the service provided at the forefront of the page initially, before settling in and allowing the viewer to concentrate on the rest of the page.

![Landing Page Hero Image](assets/media/hero_image.jpg)

- __Our Mission Section__

  - The 'Our Mission' section will allow the user to read a brief introduction to what the company does, and some examples of how it does it. 
  - The viewer will know exactly what types of management consultancy the company offers, and some of the methodologies employed.

- __Our Affiliations Section__

  - As a professional services company, affiliations are important as they provide a form of assurance that the quality of service is high for any potential clients. 
  - This section contains the logos of the main professional affiliations that the company has.  Each logo is clickable and will bring the viewer to the relevant external website in a new browser tab. 

![Meetup Times](assets/media/affiliations.png)

- __The Footer__ 

  - The footer section includes links to send an email to the company, and the company's LinkedIn page. The links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the viewer and the company as it allows for the potential establishment of two-way communication.
  - The footer also contains a copyright notice, as this is generally standard practice for professional services websites.
  - The footer appears on all pages. It is coloured the same shade of blue to match the navigation bar buttons, and allow for a nice bookending of the page.

![Footer](assets/media/footer.png)

- __Solutions__

  - The solutions page currently provides a short blog entry detailing one of the most common issues the company tends to deal with as an example to the viewer. 
  - The page also includes two embedded YouTube videos giving testamonials from other businesses who have successfully used the main methodology that the company provides. 

![Solutions](assets/media/solutions.png)

- __Resources__

  - This page contains some free PDF downloads and a newsletter sign-up section.
  - The downloads offer some value to the viewer that they could find useful, and may lead to them wanting to learn more information by contacting the company.
  - The newsletter sign-up is GDPR compliant, and will add the viewers name and email details to the company's CRM for future contact. 

![Resources](assets/media/resources.png)

### Features Left to Implement

- An 'About' page will need to be added.
- A contact form will be added also, for those who can't use the email link (for example, their preferred email is a browser based one, not desktop).
- Pages giving a higher level of detail about the services provided will be added.

## Testing 

All features and links on the website were tested manually and were successful. They were tested by the developer, and by an independent third party developer, and by a non-technical user with now development experience.

The website was tested for responsiveness both manually on different sized screens and with developer tools (Inspect Element). Various browsers (Safari, Firefox, Chrome, and Edge) were used as well.  All pages and features worked well.

Initially the YouTube videos, hero image and Navigation Bar did not scale down to phone sixed screens well. This was ultimately overcome by installing Bootstrap CDN and rewriting the code around using Bootstrap's container elements to replace the CSS code involved.

Most other issues were dealt with via trial and error.  There were no major bugs apart for the scaling mentioned above as the website is not overly complicated.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjohnmbyrne.github.io%2Fcorvus_consulting%2F)
- CSS
  - 60 errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjohnmbyrne.github.io%2Fcorvus_consulting%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css). These relate to the AOS code used to achieve the Hero Image animation. they still exist as I could not find a specific issue in the parts of the code I had edited.
  - The CSS validator also returned 291 warning, but they relate to the Bootstrap code, and are just stating that they are not statically checked.

### Unfixed Bugs

Apart from those mentioned above, there are no other unfixed bugs. One of the shortcoming of using Bootstrap and AOS is that they use libraries that I cannot see, so outside of the specific changes I made it is difficult to find the issues quickly. 

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://johnmbyrne.github.io/corvus_consulting/ 

## Credits 

- Code Institute coding course, and the Love Running walkthrough helped considerable in joining up all the code elements.
- Akshat Garg mentor gave good feedback and advise to get the project going.
- Dante Healy provided good feedback and advice, especially on the use of Bootstrap CDN.

### Content 

- Instructions on how to implement newsletter was provided by [Send In Blue](https://www.sendinblue.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
- YouTube videos and PDFs were provided by [The ReWild Group](https://www.rewildgroup.com/)

### Media

- The Hero Image used on the home page was provided by https://pixabay.com/
- The images used on the Resporces page were provided by The ReWild Group
- The Solutions image was provided by [Yay Images](https://yayimages.com/)

### Code Snippets

- Code snippets were taken and edited from [GetBootstrap](https://getbootstrap.com/) for the Navigation Bar and the Modal button on the Newsletter Subscription setting
- The Hero Image animation was achieved by the code snippet taken from [Michael Snik](https://michalsnik.github.io/aos/)
