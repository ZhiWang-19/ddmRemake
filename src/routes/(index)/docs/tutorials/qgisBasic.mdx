## QGIS - The road to 3D Topography

This tutorial will illustrate the process of importing and transforming Digital
Terrain Models (DTM) or Digital Surface Models (DSM) into a .xyz or .csv file
for further manipulation. DTMs and DSMs are commonly provided by municipalities
as base data for planning tasks. However they usually come in the format
GeoTIFF, a geo-located picture format, that is incompatible with most CAD
programs. To transform the file into a usable three-dimensional topography
model, several transformation steps have to be undertaken in QGIS. These steps
will be illustrated in the following.

![QGIS_Title](/ddmImg/QGIS_ResultTopography_II.jpg)

---

### Importing DTM or DSM

Download a set of GeoTIFFs from a website of your choice. This tutorial will
focus on the Klopstockwiese in Zurich.([Zurich GIS](https://maps.zh.ch/))

Since larger datasets are usually divided into smaller tiles the download of the
selected area as shown in the picture below will likely contain several tiles.
In this case your download will include four .tif files.

![QGIS_ZH_GIS](/ddmImg/QGIS_ZH_GIS.jpg)

After downloading the different tiles they have to be unpacked and afterwards
combined into one consistent raster file. For this step we are only interested
in the .tif file from the download folder. Drag and drop those files into your
QGIS workspace to load them. They are currently not connected and have their own
colour range indication the height of that raster point. The breaks between the
different sets are clearly visible.

![QGIS_LoadDOM_DTM](/ddmImg/QGIS_LoadDOM_DTM.jpg)

---

### Merging Raster Layers

To combine the different tiles go to Raster > Miscellaneous > Merge

![QGIS_LoadDOM_DTM](/ddmImg/QGIS_CombineDOM_DTM.jpg)

Select the raster sets you would like to combine by clicking on the three dots
in the top right corner (see image below).

![QGIS_LoadDOM_DTM_II](/ddmImg/QGIS_CombineIIDOM_DTM_I.jpg)

In this case you can select all of them. Press "Run" after selecting the raster
sets.

![QGIS_LoadDOM_DTM_III](/ddmImg/QGIS_CombineIIIDOM_DTM_I.jpg)

---

### Correcting the Raster Values

After merging you might notice that the values of the new file are not the same
as in the original files (compare the maximum and minimum raster values). This
inconvenience can be solved by adjusting the layer properties. Select the merged
raster layer, right-click on it and navigate to "Layer Properties".

![QGIS_LayerProperties](/ddmImg/QGIS_LayerProperties.jpg)

Within the properties window navigate to "Symbology" and expand the "Min / Max
Value Settings" tab by clicking on it (see image below).

![QGIS_LayerProperties_II](/ddmImg/QGIS_LayerPropertiesII.jpg)

Within the Min / Max Value Settings change the accuracy from "Estimate (faster)"
to "Actual (slower)". Click apply and close the properties window. Now the
values should the same as your input layers. This is a purely cosmetic
adjustment. The true values are still saved in the raster - QGIS just estimates
them for display purposes.

![QGIS_LayerProperties_II](/ddmImg/QGIS_LayerPropertiesIII.jpg)

---

### Clipping the Raster Layer

To limit the raster layer to the area we are interested in select the merged
raster layer and go to Raster > Extraction > Clip Raster by Extend. Make sure
the merged raster layer is selected at the top. For the field "Lcuping Extend"
choose "Draw on Canvas". Alternatively you could also use a preset rectangular
shapefile as a clipping boundary. Click "Run" and close the window.

![QGIS_LayerClipping](/ddmImg/QGIS_ClippingLayer.jpg)

After disabling the merged layer the clipped extend might look somewhat like
this:\
(Please make sure to chose a rather small extend - the bigger the extend the
more computational power is needed in the next steps)

![QGIS_LayerClippingII](/ddmImg/QGIS_ClippingLayerII_I.jpg)

---

### From Raster to Point

To turn our raster data into a point set which we can import and open in
Rhinoceros 3D we have to use the Processing Toolbox. To open the toolbox panel
go to Processing > Toolbox. The toolbox offers a wide range of geoprocessing
tools and has a surprisingly good search function.

![QGIS_Toolbox](/ddmImg/QGIS_Toolbox.jpg)

The tool we need is called "Raster values to points"

![QGIS_Toolbox](/ddmImg/QGIS_ToolboxII.jpg)

Within the tool click on the three dots in the to right to select the desired
raster layer for the transformation.

![QGIS_RasterToPoint](/ddmImg/QGIS_RasterToPoint.jpg)

Select the "Clipped (extent)" layer and press okay. (If you have renamed the
layer your layer setup might look a bit different)

![QGIS_RasterToPoint](/ddmImg/QGIS_RasterToPointII.jpg)

For the "type" field choose "(0) nodes" and press "Run. The following
calculation might take a while. The result of this calcualtion should be a layer
called "Shapes", containing points.

Right-click on the layer "Shapes" and select "Attribute Table" to have a look at
the data each point contains. The table should look as following:

![QGIS_RasterToPoint](/ddmImg/QGIS_RasterToPointIII.jpg)

---

### Exporting Points as CSV

Now we are ready for exporting.

Navigate to the "Shapes" layer, right-click and select "Export" > "Save Features
As". Within the exporting panel perform the following actions:

> 1. Select CSV (Comma Separated Values) as a file format.
> 2. Select a place to save the file and give it a name
> 3. Untick the box "ID".

Click "OK" to start the export.

![QGIS_RasterToPoint](/ddmImg/QGIS_RasterToPointIIII.jpg)

---

### Final Adjustments

If you open the exported file in a text editor it will look somewhat like the
screenshor below. To make this code readable for the Docofossor plugin we need
to delete the first line (marked in the screenshot) and save the file again. If
your file is too heavy to open in a text editor it is likely to be too heavy for
any of the next steps. Crop the raster extend a bit more and try again.

![QGIS_AdjustmentCode](/ddmImg/QGIS_AdjustmentCode.jpg)
