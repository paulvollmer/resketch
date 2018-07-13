demo-start:
	cd demo && yarn start

demo-build: demo-build-react demo-build-svg
demo-build-svg:
	cd demo/src && nodemon -e sketch --exec "node ../../src/export/export-svg.js Test.sketch ./"
demo-build-react:
	cd demo/src && nodemon -e sketch  ../../cmd/index.js

clean:
	@rm -f demo/src/Button.js
	@rm -f demo/src/Artboard.svg
	@rm -f demo/src/Icon-1.svg
