package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="priv")
public class Privilege {

		@Id
		@Column(name="priv_id")
		@SequenceGenerator(sequenceName="priv_seq", name="priv_seq")
		@GeneratedValue(generator="priv_seq", strategy=GenerationType.SEQUENCE)
		Integer id;
		
		@Column(name="priv_name")
		String name;
		
		public Integer getId() {
			return id;
		}
		public void setId(Integer id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public Privilege(Integer id, String name) {
			super();
			this.id = id;
			this.name = name;
		}
		
		
		
		public Privilege() {
			super();
		}
		@Override
		public String toString() {
			return "Privilege [id=" + id + ", name=" + name + "]";
		}
		
		
}
