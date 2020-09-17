using com.lti.pc.pricechangelist from '../db/pricechange';
service CatalogService {

 entity Materials
	as projection on pricechangelist.Materials;

}