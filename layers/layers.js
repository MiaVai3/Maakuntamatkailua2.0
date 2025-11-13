var wms_layers = [];

var format_Kunnat_0 = new ol.format.GeoJSON();
var features_Kunnat_0 = format_Kunnat_0.readFeatures(json_Kunnat_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kunnat_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kunnat_0.addFeatures(features_Kunnat_0);
var lyr_Kunnat_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kunnat_0, 
                style: style_Kunnat_0,
                popuplayertitle: 'Kunnat',
                interactive: true,
    title: 'Kunnat<br />\
    <img src="styles/legend/Kunnat_0_0.png" /> 1<br />\
    <img src="styles/legend/Kunnat_0_1.png" /> <br />\
    <img src="styles/legend/Kunnat_0_2.png" /> 2<br />' });
var format_Rantaviiva_1 = new ol.format.GeoJSON();
var features_Rantaviiva_1 = format_Rantaviiva_1.readFeatures(json_Rantaviiva_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rantaviiva_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rantaviiva_1.addFeatures(features_Rantaviiva_1);
var lyr_Rantaviiva_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rantaviiva_1, 
                style: style_Rantaviiva_1,
                popuplayertitle: 'Rantaviiva',
                interactive: true,
                title: '<img src="styles/legend/Rantaviiva_1.png" /> Rantaviiva'
            });

lyr_Kunnat_0.setVisible(true);lyr_Rantaviiva_1.setVisible(true);
var layersList = [lyr_Kunnat_0,lyr_Rantaviiva_1];
lyr_Kunnat_0.set('fieldAliases', {'GML_ID': 'GML_ID', 'NATCODE': 'NATCODE', 'NAMEFIN': 'NAMEFIN', 'NAMESWE': 'NAMESWE', 'LANDAREA': 'LANDAREA', 'FRESHWAREA': 'FRESHWAREA', 'SEAWAREA': 'SEAWAREA', 'TOTALAREA': 'TOTALAREA', 'Käyty': 'Käyty', });
lyr_Rantaviiva_1.set('fieldAliases', {'Tyyppi': 'Tyyppi', 'MuutosPvm': 'MuutosPvm', 'Shape_STLe': 'Shape_STLe', });
lyr_Kunnat_0.set('fieldImages', {'GML_ID': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEFIN': 'TextEdit', 'NAMESWE': 'TextEdit', 'LANDAREA': 'TextEdit', 'FRESHWAREA': 'TextEdit', 'SEAWAREA': 'TextEdit', 'TOTALAREA': 'TextEdit', 'Käyty': 'Range', });
lyr_Rantaviiva_1.set('fieldImages', {'Tyyppi': 'TextEdit', 'MuutosPvm': 'DateTime', 'Shape_STLe': 'TextEdit', });
lyr_Kunnat_0.set('fieldLabels', {'GML_ID': 'no label', 'NATCODE': 'no label', 'NAMEFIN': 'inline label - always visible', 'NAMESWE': 'no label', 'LANDAREA': 'no label', 'FRESHWAREA': 'no label', 'SEAWAREA': 'no label', 'TOTALAREA': 'no label', 'Käyty': 'no label', });
lyr_Rantaviiva_1.set('fieldLabels', {'Tyyppi': 'no label', 'MuutosPvm': 'no label', 'Shape_STLe': 'no label', });
lyr_Rantaviiva_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});