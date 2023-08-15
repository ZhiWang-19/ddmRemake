## RhinoCam Tutorial


### General Workflow

![RhinoCam_Workflow](/ddmImg/RhinoCam_Workflow.png)


### Software Setup

![RhinoCam_Setup_1](/ddmImg/RhinoCam_Setup_1.png)

>##### Setup Document:
>1. Verify Units: go to Options > Units: make sure the document-units are set to millimeters When you create a new document: select Small Objects - Millimeters

![RhinoCam_Setup_2](/ddmImg/RhinoCam_Setup_2.png)

>##### Locate Geometry:
>
>2. draw a box representing your material to check that everything fits inside
>
>3. make sure, that all your geometry is positioned in positive X, positive Y and negative Z Origin(0,0,0) at the top-upper-left corner of the box
>
>4. Setup Post-Options: select ShopBot-LVML as Current PostProcessor and .nc as Posted File Extension. You find the right PostProcessor under the following path on the server:
\01_DesignStudio\01_INPUT\_02 Workshops\04 CNC
>
>5. left-click on Stock > Box Stock
>
>6. define the top-lower-left corner = (0,0,0)

![RhinoCam_Setup_3](/ddmImg/RhinoCam_Setup_3.png)

![RhinoCam_Setup_4](/ddmImg/RhinoCam_Setup_4.png)



### Select Tools

![RhinoCam_Tools_1](/ddmImg/RhinoCam_Tools_1.png)

>7. go to the Cutting Tools Browser > if it‘s not yet visible, select the menu RhinoCAM > Cutting Tools Browser
>
>9. you can define your own tools or
>
>10. Load Tool library
>
>11. select shopbot-toollib.csv > OK > this should load 6 tools (3,6,12mm, ball- and flatnose) to your library
>
>12. select the tool you want to use (we will start with the 12 mm Flatnose)

![RhinoCam_Tools_2](/ddmImg/RhinoCam_Tools_2.png)

>Different results with different tools and same stepsize:  
left: 6mm ballnose tool   
right: 12mm ballnose tool   
The result is smoother with the bigger tool!

```
for flat surfaces, select flat-nose tools
for slopes, select ball-nose tools
for smooth surfaces, select larger tools
for narrow valleys, select thinner tools
for fast milling, select big diameters
for fine details, select small diameters
```

![RhinoCam_Tools_3](/ddmImg/RhinoCam_Tools_3.png)

>A) houses stand too close to each other  
>B) large tool (12mm) doesn‘t fit inbetween > a lot of rest material  
>C) ballnose tool leaves rounded edges  
>D) result with a flatnose tool



### Machining operations

>Machining Operations are different strategies to generate toolpaths - three dimensional lines in space as paths for the milling bit.

![RhinoCam_Machining_1](/ddmImg/RhinoCam_Machining_1.png)

>12. switch to the Create tab
>
>15. click 3 Axis Adv > Horizontal Roughing > the roughcut quickly gets rid of a lot of material, step by step.
>
>16. in the dialog-box that pops up, go to the Cut Parameters tab   
a) set the Stock (e.g. 3 mm for foam)   
b) under Cut Pattern, select Linear    
c) under Cut Direction, select Mixed   
d) under Stepover Control set % Tool Diameter to 90 for foam, less for harder materials...    
e) in the Cut Levels tab under Stepdown Control put % Tool Diameter to 100%-200% for foam, 50% for wood
>
>17. click Generate to calculate the toolpath > you should now have a subfolder of Setupv 1 called Horizontal Roughing, which contains all the different components / parameters that defines the operation > double-click on one of them to change the settings > a red star on one of them means Regeneration necessary (right-click > Regenerate)
>
>18. switch to the Simulate tab and hit play
>
>19. configure visibility using these buttons:

![RhinoCam_Machining_2](/ddmImg/RhinoCam_Machining_2.png)

![RhinoCam_Machining_3](/ddmImg/RhinoCam_Machining_3.png)

>A) Part visibility    
>B) Stock visibility    
>C) Material Texture visibility   
>D) Toolpath visibility   
>E) Toggle Machine GSYS    
>F) Tool visibility    
>G) Holder visibility    
>H) Machine Tool Visibility    

![RhinoCam_Machining_4](/ddmImg/RhinoCam_Machining_4.png)

>18. switch back to the Create tab
>
>21. if necessary, select a different tool from the list
>
>22. click 3 Axis Adv> Parallel Finishing >in this operation, the tool will follow the surface
>
>23. in the dialog-box, that pops up, go to the Cut Parameters tab    
a) set the Stock to 0 (normally) and Cut Direction to Mixed   
b) define the Angle of Cuts and the % Tool Diameter > depending on the desired pattern (min 25, max 90).    
c) in the Feeds and Speeds tab, set the Speed to 16‘000 RPM and the Cut (cf) to 200 mm/min.   
d) don‘t forget to set your tools in the tool tab
>
>27. click Generate again and Simulate the operation > you can create as many machining operations as you like until you are satisfied with the result.

![RhinoCam_Machining_5](/ddmImg/RhinoCam_Machining_5.png)

>The most helpful Milling Operation Are „Horizontal Roughing“, Parallel Finishing“, „Curve Machining“ and „Engraving“. But you can also experiment with „Pocketing“ or „Between 2 Curves Machining“ and other operations.



### Regions and Curves

![RhinoCam_Regions_1](/ddmImg/RhinoCam_Regions_1.png)

>Closed curves can be selected as so called Regions - either before the Machining Method is chosen or under the Features/Regions tab by clicking Select Curves as Regions.    
These curves then act as boundary to limit the toolpath to the specific area.
Curves can also be nested (islands).

![RhinoCam_Regions_2](/ddmImg/RhinoCam_Regions_2.png)

>Engrave a road
>
>1. select a (open or closed) 2D curve
>
>2. for sharp edges, select a flatnose mill from the list
>
>3. click 3 Axis Adv > Curve Machining
>
>4. in the Cut Parameters tab, define a negative stock
>
>5. click Generate
>
>6. RhinoCAM automatically projects the curve onto all visible geometry and runs the tool along the rail

![RhinoCam_Regions_3](/ddmImg/RhinoCam_Regions_3.png)

>boarder of a river...
>1. select two 2D curves (both open or both closed)
>2. click 3 Axis Adv > Between 2 Curves Machining
>3. click Generate
>6. RhinoCAM creates not parallel toolpath-lines but lines that „blend“ curves into one another. Stepsize is smaller where the curves are closer and bigger where they are more distant > the resulting pattern integrates well in the landscape if for example the two borders of a river are selected...

![RhinoCam_Regions_4](/ddmImg/RhinoCam_Regions_4.png)

![RhinoCam_Regions_5](/ddmImg/RhinoCam_Regions_5.png)

>To mill the inner area (red), select the white bounding curve

![RhinoCam_Regions_6](/ddmImg/RhinoCam_Regions_6.png)

>To mill the outer area (red), select the white AND yellow bounding curve

![RhinoCam_Regions_7](/ddmImg/RhinoCam_Regions_7.png)



### Post Processing

![RhinoCam_Post_Processing_1](/ddmImg/RhinoCam_Post_Processing_1.png)

>23. post the individual jobs to separate files. right-click on the machining operation you want to post and click [Post]
>
>28. specify the folder location and the filename (e.g.: NAME_12Ball_6Flat.nc)
>
>29. click [Post] to write G-Code file
>
>32. put your G-Code on a USB stick and bring it down to the RapLab

![RhinoCam_Post_Processing_2](/ddmImg/RhinoCam_Post_Processing_2.png)
