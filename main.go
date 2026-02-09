package main

import (
	"fmt"
	"log"
	"log/slog"
	"net/http"
)

func main() {
	http.HandleFunc("/", handleHello)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handleHello(w http.ResponseWriter, _ *http.Request) {
	wc, err := w.Write([]byte("Hello World\n"))
	if err != nil {
		slog.Error("error writing msg", err)
		return
	}
	fmt.Printf("%d bytes written\n", wc)
}
