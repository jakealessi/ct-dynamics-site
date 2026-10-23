# Temporary stock photography

These four photos illustrate the partnership pillars on the homepage and How we work page. They are temporary stock imagery, not photographs of CT Dynamics facilities, employees, customers, or completed work. Founder portraits remain initials until real photos are supplied.

Each source was marked free to use under the [Unsplash License](https://unsplash.com/license) when checked on October 23, 2026. The license permits commercial use and modification. Credits are retained here for reference.

| Website file           | Subject                             | Photographer and source                                                                                   |
| ---------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `stock-inventory.webp` | Warehouse inventory                 | [Jacques Dillies](https://unsplash.com/photos/warehouse-shelving-with-cardboard-boxes-jcav1COVvOc)        |
| `stock-packaging.webp` | Unbranded cardboard packaging       | [Luke Heibert](https://unsplash.com/photos/a-lot-of-brown-boxes-that-are-open-gthSas4oYC0)                |
| `stock-chocolate.webp` | Chocolate product still life        | [Mae Mu](https://unsplash.com/photos/flat-lay-photography-of-chocolate-bars-BqJAbXk2Fuw)                  |
| `stock-creator.webp`   | Hands photographing food on a phone | [S O C I A L . C U T](https://unsplash.com/photos/person-using-iphone-taking-picture-of-food-Wk6Jx6NQOGY) |

Files are served locally from `public/media/optimized/`, with 1,200-pixel WebP files and 640-pixel `-small.webp` versions. They load lazily and are shared across both pages. The original downloads are kept only in the ignored `outputs/stock-photo-sources/` directory.

To replace them, update the `photo` entries in `app/partnership-data.ts`, supplying the source path and actual height at 1,200 pixels wide. Include a matching 640-pixel `-small.webp` version. Keep photos below 150 KB each and the complete optimized media folder below 600 KB.
