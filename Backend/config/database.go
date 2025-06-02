package config

import (
	"fmt"
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func LoadDB() {
	connectionStr := fmt.Sprintf("%v:%v@tcp(%v)/%v?%v", ENV.DB_NAME, ENV.DB_PASSWORD, ENV.DB_URL, ENV.DB_DATABASE, "charset=utf8mb4&parseTime=true&loc=Asia%2FJakarta")

	log.Printf("Connecting to database.....")
	db, err := gorm.Open(mysql.Open(connectionStr), &gorm.Config{})
	if err != nil {
		panic("failed connect to database")
	}

	DB = db
	log.Printf("Database Connected Successfully!")
}
