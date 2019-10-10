# How to update POC information

There is POC information on COS Center, COS Facility, CRST SME, and Sustain CX/KR pages.

The frontmatter keys for these all end in name or email, see examples below:

```
// COS Center
cos_manager_name:
cos_manager_email:

// COS Facility
facility_technical_poc_email:
facility_technical_poc_name:

// CRST SME
expert_email:
expert_name:

// Sustain CX/KR Pages
sustain_msc_program_manager_name:
sustain_msc_program_manager_email:
sustain_msc_technical_lead_name:
sustain_msc_technical_lead_email:
sustain_hq_usace_proponent_name:
sustain_hq_usace_proponent_email:
sustain_erdc_liaison_name:
sustain_erdc_liaison_email:
```

### Instructions for editing

1. Find the markdown file in the content folder of your fork.
2. Click the pencil edit icon on the top left corner of the markdown body.
3. Make edits
4. Click "commit changes"

### How to list more than one email

You just need to have a semicolon and space in-between the emails as seen below

```
expert_email: email1@usace.army.mil; email2@usace.army.mil; email3@usace.army.mil
```

### How to have the email subject auto-populate

1. Take your specified email subject and replace all spaces with `%20`, so the subject `this is my subject` would become `this%20is%20my%20subject`
2. then add `?subject=` to the beginning, so `this%20is%20my%20subject` becomes `?subject=this%20is%20my%20subject`
3. then add that to the end of your last email so `expert_email: email1@usace.army.mil` becomes `expert_email: email1@usace.army.mil?subject=this%20is%20my%20subject`
