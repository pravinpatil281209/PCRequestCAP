namespace com.lti.pc.pricechangelist;

entity Materials {
  key matnumber 	: Integer;
  descr 			: String(50);
  purchdoc			: String(20);
  item  			: Integer;
  plant				: String(10);
  curprice  		: Decimal(9,2);
  proprice  		: Decimal(9,2);
  pricevar			: String(10);
  validity			: Date;
  comments			: String(50)
}