package org.redhat.demo;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.redhat.demo.data.Accident;

public class InputConvertor implements Processor {

	@Override
	public void process(Exchange exchange) throws Exception {
		
		Accident accident = new Accident();
		accident.setContactName((String) exchange.getIn().getHeader("contactName"));
		accident.setDate((String) exchange.getIn().getHeader("accidentdate"));
		accident.setDescription((String) exchange.getIn().getHeader("description"));
		accident.setEmail((String) exchange.getIn().getHeader("email"));
		accident.setPhone((String) exchange.getIn().getHeader("phone"));
		accident.setType((String) exchange.getIn().getHeader("type"));
		
		exchange.getIn().setBody(accident);
	}

}
