import { ApiProperty } from "@nestjs/swagger";
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";
import { CarBrand } from "../enums/brand.enum";
import { VehicleType } from "../enums/vehicle-type.enum";
import { EngineType } from "../enums/engine-type.enum";
import { TransmissionType } from "../enums/transmission-type.enum";
import { CarFeatures } from "../enums/features.enum";

export class RegisterCarDto {
  @ApiProperty({
    name: "name",
    description: "Name of the car",
    example: "Toyota Camry",
  })
  @IsString({ message: "Car Name must be a string" })
  @MinLength(3, { message: "Car Name must be at least 4 characters long" })
  @MaxLength(15, { message: "Car Name must not exceed 15 characters " })
  @Matches(/^[a-zA-Z0-9 ]+$/, {
    message: "Car Name must only contain letters, numbers and spaces",
  })
  name: string;
  @ApiProperty({
    name: "images",
    description: "Images of the car",
    example: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
  })
  @IsArray({ message: "Images must be an array of strings" })
  @IsString({ each: true, message: "Images must be an array of strings" })
  @IsNotEmpty({ message: "Images cannot be empty" })
  @ArrayMinSize(1, { message: "There should atleast be one image of car" })
  @ArrayMaxSize(7, { message: "Car images must not exceeed 7" })
  images: string[];
  @ApiProperty({
    name: "brand",
    description: "Brand of the car",
    enum: CarBrand,
  })
  @IsEnum(CarBrand, { message: "Invalid Car Brand" })
  @IsNotEmpty({ message: "Car brand cannot be empty" })
  brand: CarBrand;

  @ApiProperty({
    name: "description",
    description: "Description of the car",
    example: "A shiny car with a powerful engine",
  })
  @IsString({ message: "Description must be a string" })
  @MinLength(10, { message: "Description must be at least 10 characters long" })
  @MaxLength(255, { message: "Description must not exceed 255 characters" })
  @IsNotEmpty({ message: "Car description cannot be empty" })
  description: string;

  @ApiProperty({
    name: "price_per_day",
    description: "Price per day of the car in Euros",
    example: 100,
  })
  @IsNotEmpty({ message: "Price per day cannot be empty" })
  @IsInt({ message: "Price per day must be an integer" })
  price_per_day: number;

  @ApiProperty({
    name: "price_per_hour",
    description: "Price per hour of the car in Euros",
    example: 20,
  })
  @IsNotEmpty({ message: "Price per hour cannot be empty" })
  @IsInt({ message: "Price per hour must be an integer" })
  price_per_hour: number;

  @ApiProperty({
    name: "vehicle_type",
    description: "Type of the vehicle",
    enum: VehicleType,
  })
  @IsEnum(VehicleType, { message: "Invalid Vehicle Type" })
  @IsNotEmpty({ message: "Vehicle type cannot be empty" })
  vehicle_type: VehicleType;

  @ApiProperty({
    name: "country_of_manufacture",
    description: "Country of manufacture of the car",
    example: "USA",
  })
  @IsString({ message: "Country of manufacture must be a string" })
  @MinLength(3, {
    message: "Country of manufacture must be at least 3 characters long",
  })
  @MaxLength(255, {
    message: "Country of manufacture must not exceed 255 characters",
  })
  @IsNotEmpty({ message: "Manufacturing country cannot be empty" })
  country_of_manufacture: string;

  @ApiProperty({
    name: "city_of_registeration",
    description: "City of registeration of the car",
    example: "New York",
  })
  @IsString({ message: "City of registeration must be a string" })
  @MinLength(3, {
    message: "City of registeration must be at least 3 characters long",
  })
  @MaxLength(255, {
    message: "City of registeration must not exceed 255 characters",
  })
  @IsNotEmpty({ message: "City of registeration cannot be empty" })
  city_of_registeration: string;

  @ApiProperty({
    name: "color_code",
    description: "Color of the car",
    example: "#FF0000",
  })
  @IsNotEmpty({ message: "Color of car cannot be empty" })
  @IsString({ message: "Color of car must be a string" })
  color_code: string;

  @ApiProperty({
    name: "mileage",
    description: "Mileage of the car in km",
    example: 10000,
  })
  @IsNotEmpty({ message: "Mileage of car cannot be empty" })
  @IsInt({ message: "Mileage must be an integer" })
  mileage: number;

  @ApiProperty({
    name: "engine_type",
    description: "Engine type",
    enum: EngineType,
  })
  @IsEnum(EngineType, { message: "Invalid Engine Type" })
  @IsNotEmpty({ message: "Engine type of car cannot be empty" })
  engine_type: EngineType;

  @ApiProperty({
    name: "transmission_type",
    description: "Transmission type",
    enum: [
      TransmissionType.Automatic_Transmission,
      TransmissionType.Manual_Transmission,
      TransmissionType.Continuously_Variable_Transmission,
      TransmissionType.Dual_Clutch_Transmission,
    ],
  })
  @IsEnum(TransmissionType, { message: "Invalid Transmission Type" })
  @IsNotEmpty({ message: "Transmission type of car cannot be empty" })
  transmission_type: TransmissionType;

  @ApiProperty({
    name: "fuel_economy",
    description: "Fuel economy of the car in km/l",
    example: 10,
  })
  @IsNotEmpty({ message: "Fuel economy of car cannot be empty" })
  @IsInt({ message: "Fuel economy must be an integer" })
  fuel_economy: number;

  @ApiProperty({
    name: "available_start_date_time",
    description: "Available start date time of the car",
    example: "2024-12-25T12:00:00Z",
  })
  @IsString({ message: "Start date time should be a valid string" })
  @IsNotEmpty({ message: "Availability start date of car cannot be empty" })
  available_start_date_time: string;

  @ApiProperty({
    name: "available_end_date_time",
    description: "Available end date time of the car",
    example: "2024-12-26T12:00:00Z",
  })
  @IsString({ message: "End date time should be a valid string" })
  @IsNotEmpty({ message: "Availability end date of car cannot be empty" })
  available_end_date_time: string;

  @ApiProperty({
    name: "pickup_address",
    description: "The address from where you have to pick the car",
    example: "Lahore",
  })
  @IsString({ message: "Pickup Address must be in string" })
  @IsNotEmpty({ message: "Pickup Address of car cannot be empty" })
  pickup_address: string;

  @ApiProperty({
    name: "dropoff_address",
    description: "The address from where you have to drop the car",
    example: "Karachi",
  })
  @IsString({ message: "Dropoff Address must be in string" })
  @IsNotEmpty({ message: "Dropoff Address of car cannot be empty" })
  dropoff_address: string;

  @ApiProperty({
    name: "features",
    description: "List of car features",
    enum: CarFeatures,
    isArray: true,
    required: true,
  })
  @IsArray()
  @ArrayNotEmpty({ message: "Car Features cannot be empty" })
  @IsEnum(CarFeatures, { each: true })
  features: CarFeatures[];

  @ApiProperty({
    name: "maximum_passengers",
    description: "Maximum passengers allowed in the car",
    example: 4,
    required: true,
  })
  @IsInt({ message: "Maximum passengers must be an integer" })
  @IsNotEmpty({ message: "Max passengers cannot be empty" })
  @Max(20, { message: "Maximum passengers cannot exceed 20" })
  @Min(2, { message: "There should be atleast 2 passengers" })
  maximum_passengers: number;

  @ApiProperty({
    name: "luggage_capacity",
    description: "Luggage Capacity in the car in Kg",
    example: 4,
    required: true,
  })
  @IsInt({ message: "Luggage Capacity must be an integer" })
  @IsNotEmpty({ message: "Luggage Capacity cannot be empty" })
  @Max(150, { message: "Luggage Capacity cannot exceed 150kg" })
  @Min(1, { message: "Luggage Capacity must be at least 1kg" })
  luggage_capacity: number;

  @ApiProperty({
    name: "insurance_included",
    description: "Insurance inclusion of the car",
    example: true,
  })
  @IsBoolean({ message: "Insurance inclusion must be of boolean type" })
  @IsNotEmpty({ message: "Insurance inclusion cannot be empty" })
  insurance_included: boolean;

  @ApiProperty({
    name: "pet_policy",
    description:
      "Are pets allowed in the car or not? if yes then true else false",
    example: true,
  })
  @IsBoolean({ message: "Pet policy must be of boolean type" })
  @IsNotEmpty({ message: "Pet policy cannot be empty" })
  pet_policy: boolean;
  @ApiProperty({
    name: "smoking_policy",
    description:
      "Is smoking allowed in the car or not? if yes then true else false",
    example: true,
  })
  @IsBoolean({ message: "Smoking policy must be of boolean type" })
  @IsNotEmpty({ message: "Smoking policy cannot be empty" })
  smoking_policy: boolean;
}
