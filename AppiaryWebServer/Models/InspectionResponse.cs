using AppiaryWebServer.Models;
using System;
using System.Collections.Generic;

public class InspectionResponse : BaseResponse
{
    public InspectionStart inspectionStart { get; set; }
    public List<BoxInspection> boxInspections { get; set; }
    public InspectionActions inspectionActions { get; set; }
    public InspectionConclusion inspectionConclusion { get; set; }
}

public class InspectionStart
{
    public DateTime datetimeValue { get; set; }
    public string temperature { get; set; }
    public string traffic { get; set; }
    public Weather weather { get; set; }
    public string purpose { get; set; }
    public string hiveId { get; set; }
}

public class Weather
{
    public bool sunny { get; set; }
    public bool cloudy { get; set; }
    public bool partlyCloudy { get; set; }
    public bool rain { get; set; }
    public bool humid { get; set; }
    public bool dry { get; set; }
    public bool still { get; set; }
    public bool slightBreeze { get; set; }
    public bool windy { get; set; }
}

public class BoxInspection
{
    public string boxId { get; set; }
    public string bees { get; set; }
    public bool honey { get; set; }
    public bool isBuiltOut { get; set; }
    public string honeyAmount { get; set; }
    public bool Nectar { get; set; }
    public bool pollen { get; set; }
    public bool queen { get; set; }
    public bool larva { get; set; }
    public bool eggs { get; set; }
    public bool cappedBrood { get; set; }
    public bool droneBrood { get; set; }
    public bool queenCup { get; set; }
    public bool cappedQueen { get; set; }
    public bool supercedureCell { get; set; }
}

public class InspectionActions
{
    public bool feed { get; set; }
    public bool feedSugarwater { get; set; }
    public bool feedPollenPatty { get; set; }
    public string feedOther { get; set; }
    public bool addFeeder { get; set; }
    public bool refillFeeder { get; set; }
    public bool addBoxes { get; set; }
    public bool addExcluder { get; set; }
    public bool requeen { get; set; }
    public bool addOtherEquipment { get; set; }
    public string addOtherEquipmentDetails { get; set; }
    public bool treatment { get; set; }
    public bool pestManagement { get; set; }
    public string treatmentDetails { get; set; }
    public string pestManagementDetails { get; set; }
    public bool hiveManagement { get; set; }
    public string hiveManagementDetails { get; set; }
    public bool miteCount { get; set; }
    public string miteCountAmount { get; set; }
    public string miteCountMethod { get; set; }
    public string otherActions { get; set; }
}

public class InspectionConclusion
{
    public string temperment { get; set; }
    public string droneCount { get; set; }
    public string honeyBoxPopulation { get; set; }
    public string broodChamberPopulation { get; set; }
    public string[] pests { get; set; }
    public string honeyResources { get; set; }
    public string nectarResources { get; set; }
    public string pollenResources { get; set; }
    public string broodPattern { get; set; }
    public string queenAge { get; set; }
    public bool bearding { get; set; }
    public string eggsAmount { get; set; }
    public bool queen { get; set; }
    public bool queenCells { get; set; }
    public string dronesAmount { get; set; }
    public bool pollenIncoming { get; set; }
    public string[] diseases { get; set; }
    public string[] hiveCondition { get; set; }
}
