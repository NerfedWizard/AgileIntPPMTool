package com.loel.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class ProjectTask {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(updatable = false)
	private String projectSequence;
	@NotBlank(message = "Please include project summary")
	private String summary;
	private String acceptanceCriteria;
	private String status;
	private Integer priority;
	private Date dueDate;
	// ManyToOne with backlog
	@Column(updatable = false)
	private String projectIdentifier;

	private Date createdAt;
	private Date updatedAt;

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}

	@Override
	public String toString() {
		return "ProjectTask{" + "id=" + id + ", projectSequence='" + projectSequence + '\'' + ", summary='" + summary
				+ '\'' + ", acceptanceCriteria='" + acceptanceCriteria + '\'' + ", status='" + status + '\''
				+ ", priority=" + priority + ", dueDate=" + dueDate + ", projectIdentifier='" + projectIdentifier + '\''
				+ ", create_At=" + createdAt + ", update_At=" + updatedAt + '}';
	}

}
