package config


import "github.com/spf13/viper"

type Config struct {
	PORT        string
	DB_NAME     string
	DB_PASSWORD string
	DB_URL      string
	DB_DATABASE string
}

var ENV *Config

func LoadConfig() {
	viper.SetConfigName(".env")
	viper.SetConfigType("env")
	viper.AddConfigPath(".")

	if err := viper.ReadInConfig(); err != nil {
		panic(err)
	}

	if err := viper.Unmarshal(&ENV); err != nil {
		panic(err)
	}
}
