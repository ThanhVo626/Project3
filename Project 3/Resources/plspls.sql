CREATE TABLE Zipcode (
    DataYear INT ,
    DashboardFuelTypeGroup VARCHAR(255),
    FuelType VARCHAR(255),
    Zip VARCHAR(10),
    NumberOfVehicles INT
);

CREATE TABLE Electricvehicles (
    DataYear INT,
    County VARCHAR(255),
    DashboardFuelTypeGroup VARCHAR(255),
    FuelType VARCHAR(255),
    Manufacturer VARCHAR(255),
    Model VARCHAR(255),
    NumberOfVehicles INT
);

alter table Zipcode add id serial ;
alter table Zipcode add primary key(id);
alter table Electricvehicles add id serial ;
alter table Electricvehicles add primary key(id);
drop table Electricvehicles ;
drop table Zipcode ;
select * from Electricvehicles ;
select * from Zipcode ;
