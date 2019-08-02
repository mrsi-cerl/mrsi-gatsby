# Frontmatter

This document outlines the frontmatter keys used in the markdown files

# Table of Contents

- [General Keys](#general-keys)
  - [`file_library_root_path`](#file_library_root_path)
  - [`slug`](#slug)
  - [`carousel_images`](#carousel_images)
  - [`related_links`](#related_links)
  - [`page_last_reviewed`](#page_last_reviewed)
- [COS Page Keys](#cos-page-keys)
  - [`cos_manager_name`](#cos_manager_name)
  - [`cos_manager_email`](#cos_manager_email)
  - [`cos_long_name`](#cos_long_name)
  - [`cos_short_name`](#cos_short_name)
- [Facility Page Keys](#facility-page-keys)
  - [`facility_long_name`](#facility_long_name)
  - [`facility_short_name`](#facility_short_name)
  - [`facility_technical_poc_name`](#facility_technical_poc_name)
  - [`facility_technical_poc_email`](#facility_technical_poc_email)
  - [`facility_cos_short_name`](#facility_cos_short_name)
  - [`facility_functional_proponent`](#facility_functional_proponent)
  - [`facility_category_codes`](#facility_category_codes)
- [Sustain CX/KR Keys](#Sustain-CX/KR-Keys)
  - [`sustain_msc_program_manager_name`](#sustain_msc_program_manager_name)
  - [`sustain_msc_program_manager_email`](#sustain_msc_program_manager_email)
  - [`sustain_msc_technical_lead_name`](#sustain_msc_technical_lead_name)
  - [`sustain_msc_technical_lead_email`](#sustain_msc_technical_lead_email)
  - [`sustain_hq_usace_proponent_name`](#sustain_hq_usace_proponent_name)
  - [`sustain_hq_usace_proponent_email`](#sustain_hq_usace_proponent_email)
  - [`sustain_erdc_liaison_name`](#sustain_erdc_liaison_name)
  - [`sustain_erdc_liaison_email`](#sustain_erdc_liaison_email)

# General Keys

The following keys are to be used by all page types, some are required and some are optional, please see the details below for more information on each key

## `file_library_root_path`

Note: This should only be changed by developers

Purpose:

Examples:

```
file_library_root_path: "content/cos/lrl/jc/Library/"
```

## `slug`

Note: This should only be changed by developers

Examples:

```
slug: /cos/lrl/jc/
```

## `carousel_images`

Requirements:

Examples:

```
carousel_images:
  - ./05-courtrm-facility-ft-bragg.jpg
  - ./04-courtroom-usag-humphreys-korea.jpg
  - ./01-bldg-21-renovation-ft-bliss-tx.jpg
```

## `related_links`

Examples:

```
related_links:
  - caption: "Louisville District"
    url: "http://www.lrl.usace.army.mil/"
  - caption: "Another Link"
    url: "www.anotherlink.com"
```

## `page_last_reviewed`

Examples:

```
page_last_reviewed: 1 January 1970
```

# COS Page Keys

The following keys are used for Center of Standardization pages (SWF, POH, ...). These are all required for COS pages.

## `cos_manager_name`

Examples:

```
cos_manager_name: "Derek (Drew) Henry"
```

## `cos_manager_email`

Examples:

```
cos_manager_email: "derek.a.henry@usace.army.mil"
```

## `cos_long_name`

Examples:

```
cos_long_name: "Louisville"
```

## `cos_short_name`

Examples:

```
cos_short_name: "LRL"
```

# Facility Page Keys

The following keys are used for COS Facility pages (Senior Leaders Quarters, Army Community Service Center, ...). These are all required for Facility pages.

## `facility_long_name`

Examples:

```
facility_long_name: Judicial Center with Courtroom
```

## `facility_short_name`

Examples:

```
facility_short_name: JC
```

## `facility_technical_poc_name`

Examples:

```
facility_technical_poc_name: Derek (Drew) Henry
```

## `facility_technical_poc_email`

Examples:

```
facility_technical_poc_email: derek.a.henry@usace.army.mil
```

## `facility_cos_short_name`

Examples:

```
facility_cos_short_name: LRL
```

## `facility_functional_proponent`

Examples:

```
facility_functional_proponent: HQDA OTJAG
```

## `facility_category_codes`

Examples:

```
facility_category_codes:
  - "61075"
  - "12345"
```

# Sustain CX/KR Keys

The following keys are used for Centers of Expertise and Knowledge Resource pages on the sustainability portion of the website. These are all required for CX/KR Pages.

## `sustain_msc_program_manager_name`

Examples:

```
sustain_msc_program_manager_name: Brandon Martin
```

## `sustain_msc_program_manager_email`

Examples:

```
sustain_msc_program_manager_email: Brandon.T.Martin@usace.army.mil
```

## `sustain_msc_technical_lead_name`

Examples:

```
sustain_msc_technical_lead_name: Mary Foutz
```

## `sustain_msc_technical_lead_email`

Examples:

```
sustain_msc_technical_lead_email: Mary.P.Foutz@usace.army.mil
```

## `sustain_hq_usace_proponent_name`

Examples:

```
sustain_hq_usace_proponent_name: Tim Gordon
```

## `sustain_hq_usace_proponent_email`

Examples:

```
sustain_hq_usace_proponent_email: Timothy.D.Gordon@usace.army.mil
```

## `sustain_erdc_liaison_name`

Examples:

```
sustain_erdc_liaison_name: Dale Herron
```

## `sustain_erdc_liaison_email`

Examples:

```
sustain_erdc_liaison_email: Dale.L.Herron@usace.army.mil
```

#### Frontmatter Keys

All Pages

```
file_library_root_path: ""
slug: ""
carousel_images:
  - ""
  - ""
related_links:
  - caption: ""
    url: ""
  - caption: ""
    url: ""
page_last_reviewed: ""
doc_type: ""
```

COS Pages

```
cos_manager_name: ""
cos_manager_email: ""
cos_long_name: ""
cos_short_name: ""
```

Facility Pages

```
facility_long_name: ""
facility_short_name: ""
facility_technical_poc_name: ""
facility_technical_poc_email: ""
facility_cos_short_name: ""
facility_functional_proponent: ""
facility_category_codes:
  - ""
  - ""
```

CX/KR Pages

```
cx_msc_program_manager_name: ""
cx_msc_program_manager_email: ""
cx_msc_technical_lead_name: ""
cx_msc_technical_lead_email: ""
cx_hq_usace_proponent_name: ""
cx_hq_usace_proponent_email: ""
cx_erdc_liaison_name: ""
cx_erdc_liaison_email: ""
```
