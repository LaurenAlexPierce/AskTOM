package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="toms")
public class Tom {

	@Id
	@Column(name="user_id")
	@SequenceGenerator(sequenceName="tom_seq", name="tom_seq")
	@GeneratedValue(generator="tom_seq", strategy = GenerationType.SEQUENCE)
	Integer id;
	
	@Column(name="user_name")
	String username;
	
	@Column(name="tom_pass")
	String password;
	
	@OneToOne
	@JoinColumn(name="priv_id")
	Integer privId;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Integer getPrivId() {
		return privId;
	}
	public void setPrivId(Integer privId) {
		this.privId = privId;
	}
	@Override
	public String toString() {
		return "Toms [id=" + id + ", username=" + username + ", password=" + password + ", privId=" + privId + "]";
	}
	public Tom() {
		super();
	}
	public Tom(Integer id, String username, String password, Integer privId) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.privId = privId;
	}
	
	
}
