# Markdown File Templates

This document outlines the templates for each doc_type and the steps needed to add a new page.

**Table of Contents:**

- [COS Center]()
- [COS Facility]()
- [Generic Page]()
- [Sustain Subject Matter Area]()
- [Sustain Knowledge Resource]()
- [Sustain Webinar Page]()
- [Sustain Events]()
- [Sustain Technology In Action]()
- [Sustain News]()

## COS Center

To create a new COS Center page, create a new markdown page in the content folder with the template below. Replace the info in the template with your own data.

Adding a new markdown file to the content folder will automatically add this page to the COS side-nav

```
---
file_library_root_path: ""
slug: "/cos/swf/"
related_links:
  - caption: "Fort Worth District"
    url: "http://www.swf.usace.army.mil/"
  - caption: "Link 2"
    url: "http://www.link2.army.mil/"
page_last_reviewed: "Tuesday, August 14, 2018"
doc_type: "cos_page"
cos_manager_name: "Matt Milliorn"
cos_manager_email: "matthew.milliorn@usace.army.mil"
cos_long_name: "Fort Worth"
cos_short_name: "SWF"
---

<!-- Write markdown content below this line -->

```

## COS Facility

To create a new COS Facility page, create a new markdown page in the content folder with the template below. Replace the info in the template with your own data.

Adding a new markdown file to the content folder will automatically add this page to the COS side-nav

```
---
carousel_images:
  - ./AIT-Complex.JPG
doc_type: facility_page
facility_category_codes:
  - 72121
facility_cos_short_name: SWF
facility_functional_proponent: G-3/5/7
facility_long_name: Advanced Individual Training Complex
facility_short_name: AIT
facility_technical_poc_email: Javier.A.Fano@usace.army.mil
facility_technical_poc_name: Javier Fano
file_library_root_path: "content/cos/swf/ait/Library/"
page_last_reviewed: 1 January 1970
slug: /cos/swf/ait/
---

<!-- Write markdown content below this line -->

```

## Generic Page

To create a new Generic Page, create a new markdown page in the content folder with the template below. Replace the info in the template with your own data.

If you want this newly added generic page to show up in the side-nav then you must manually add it to the json found [here]()

```
---
title: About the Centers of Standardization
doc_type: generic_page
slug: /cos/
file_library_root_path: content/cos/cos_home_page/Library/
related_links:
  - caption: "AR 420-1 - Army Facilities Management"
    url: "https://www.apd.army.mil/epubs/DR_pubs/DR_a/pdf/web/r420_1.pdf"
  - caption: "USACE Operation Orders (OPORD) Home Page"
    url: "https://team.usace.army.mil/sites/HQ-MP/MOI/default.aspx"
---

<!-- Write markdown content below this line -->

```

## Sustain Subject Matter Area

To create a new Sustain Subject Matter Area page, create a new markdown page in the content folder with the template below. Replace the info in the template with your own data.

Adding a new markdown file to the content folder will automatically add this page to the Sustain side-nav

```---
doc_type: sustain_cx_page
carousel_images:
  - ./150629-a-ce999-002.jpg
  - ./blower-door.jpg
  - ./commissioning_800_resize.jpg
  - ./commissioning-scheduling-process.jpg
title: Commissioning

sustain_msc_program_manager_name: Brandon Martin
sustain_msc_program_manager_email: Brandon.T.Martin@usace.army.mil

sustain_msc_technical_lead_name: Mary Foutz
sustain_msc_technical_lead_email: Mary.P.Foutz@usace.army.mil

sustain_hq_usace_proponent_name: Tim Gordon
sustain_hq_usace_proponent_email: Timothy.D.Gordon@usace.army.mil

sustain_erdc_liaison_name: Dale Herron
sustain_erdc_liaison_email: Dale.L.Herron@usace.army.mil

file_library_root_path: content/sustain/CX-KR Documents/Commissioning/
page_last_reviewed: 1 January 1970
slug: /sustain/cx/commissioning/
---

<!-- Write markdown content below this line -->

```

## Sustain Knowledge Resource

To create a new Sustain Knowledge Resource page, create a new markdown page in the content folder with the template below. Replace the info in the template with your own data.

Adding a new markdown file to the content folder will automatically add this page to the Sustain side-nav

```
---
doc_type: sustain_kr_page
carousel_images:
  - ./move-the-chapel-1.jpg
  - ./p1010016.jpg
  - ./p9160023.jpg
  - ./separating-debris-from-salvage.jpg
  - ./waste20diversion_800_resize.jpg

title: Construction Waste Diversion and Mitigation

sustain_msc_program_manager_email: Jeanette.M.Fiess@usace.army.mil
sustain_msc_program_manager_name: Jeanette Fiess

sustain_msc_technical_lead_email: Ned.A.Shepherd@usace.army.mil
sustain_msc_technical_lead_name: Ned Shepherd

sustain_hq_usace_proponent_email: Zenovia.D.Wilcox@usace.army.mil
sustain_hq_usace_proponent_name: Zenovia Wilcox

sustain_erdc_liaison_email: Giselle.Rodriguez@usace.army.mil
sustain_erdc_liaison_name: Giselle Rodriguez

file_library_root_path: content/sustain/CX-KR Documents/Construction Waste/
page_last_reviewed: 1 January 1970
slug: /sustain/kr/construction-waste/
---

<!-- Write markdown content below this line -->

```

## Sustain Webinar

To create a new Sustain Webinar page, create a new markdown page in the content folder with the template below. Replace the info in the template with your own data.

Adding a new markdown file to the content folder will automatically add this page to the Sustain webinars list

```
---
title: A Sustainable Civil Works
sustain_webinar_presenter: Heather Morgan
sustain_webinar_youtube_video_id: OH3yfs9HsNE
sustain_webinar_broadcast_date: Tuesday, July 28, 2015
doc_type: sustain_webinar
slug: /sustain/webinars/a-sustainable-civil-works
---

<!-- Write markdown content below this line -->


**The quiz is not yet available**
[**Click here for the webinar quiz**](./advanced-modeling-requirements-ecb-2016-3-QUIZ.pdf)
```

## Sustain Events

To create a new Sustain Event, create a new markdown page in the content folder with the template below. Replace the info in the template with your own data.

Adding a new markdown file to the content folder will automatically add this page to the Sustain Events list

```
---
title: Engineering & Construction Webinars
doc_type: sustain_events
---

**Description:**

Webinars will be conducted on a posted schedule for various sustainability topics and hosted by subject matter experts. Continuing education credits are available in blocks after passing the test.

Join us on our youtube channel (https://www.youtube.com/user/USACEsustainability).

**Location:**

Youtube channel

**Event Type:**

Webinar

**Schedule:**

This event repeats weekly

Here's the schedule for the next 6 months

- 23 Jul 19 - Starting at 14:00 - 15:00
- 06 Aug 19 - Starting at 14:00 - 15:00
- 20 Aug 19 - Starting at 14:00 - 15:00

```

## Sustain Technology In Action

To create a new Sustain Technology In Action Location, create a new markdown page in the content folder with the template below. Replace the info in the template with your own data.

Adding a new markdown file to the content folder will automatically add this page to the Sustain TIA Map

```
---
doc_type: sustain_technology_in_action
title: 13th Combat Aviation Brigade (CAB) Air Traffic Control Tower (ATCT)
project_coordinates: 38.7420537,-104.7944445
categories:
  - Solar Photovoltaic
  - High Performance Building Envelopes
  - District Energy
carousel_images:
  - ./23.jpg
---

**Location:** Fort Carson, CO

**POC:** Albuquerque District

**Highlights:**

- 48.8% reduction in energy costs (LEED)
- 37.0% reduction in water use
- 78.3% of construction waste diverted from the landfill

**Description:**

This project consisted of the design and construction of an Air Field Operations Building (AFOB)
and Air Traffic Control Tower (ATCT) for the 13th Combat Aviation Brigade
```

## Sustain News

To create a new Sustain News/Announcement, create a new markdown page in the content folder with the template below. Replace the info in the template with your own data.

Adding a new markdown file to the content folder will automatically add this page to the Sustain Events list

```
---
title: USACE Campaign Plan FY2015-2019
doc_type: sustain_news
date_published: "2017-08-08"
---

​Signed OPORD 2014-80 Publication of USACE Campaign Plan Fiscal Year 2015-2019

Please note page 33-34/140 of the PDF for Campaign Plan Objective 1c3

```
