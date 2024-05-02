 save_css:
 	npx postcss-cli tailwind.css -o ./src/output.css

 rund:
 	docker build -t imaginator .
 	docker run -p 80:3000 imaginator
