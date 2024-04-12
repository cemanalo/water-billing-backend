_packDepsLayer:
	rm -rf nodejs
	rm -f water-billing-deps.zip
	mkdir nodejs
	cp package.json package-lock.json nodejs
	cd nodejs && npm install --omit=dev
	zip -vr water-billing-deps.zip nodejs/

# _createDepsLayer:
# 	aws lambda publish-layer-version --layer-name water-billing-deps \
#     --description "water billing deps Layer" \
#     --content S3Bucket=water-billing-layer,S3Key=water-billing-deps.zip \
#     --compatible-runtimes nodejs \
#     --compatible-architectures "arm64"

_createDepsLayerLocal:
	aws lambda publish-layer-version --layer-name water-billing-deps \
    --description "water billing deps Layer" \
    --zip-file fileb://water-billing-deps.zip \
    --compatible-runtimes nodejs \
    --compatible-architectures "arm64"

startDb:
	docker-compose up -d postgres